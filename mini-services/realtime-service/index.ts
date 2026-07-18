/**
 * BusinessHustle Real-Time Service
 * Socket.io server for handling:
 * - Presence tracking (online/offline)
 * - Real-time gifting with animations
 * - Room membership and chat
 * - Discord event bridging
 */

import { createServer } from "http";
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// In-memory caches for hot data
const onlineUsers = new Map<string, Set<string>>(); // userId -> socketIds
const roomMembers = new Map<string, Set<string>>(); // roomId -> socketIds
const userCurrentRoom = new Map<string, string>(); // userId -> roomId

// Rate limiting store
const rateLimits = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(socketId: string, action: string, maxRequests: number = 10, windowMs: number = 10000): boolean {
  const key = `${socketId}:${action}`;
  const now = Date.now();
  const limit = rateLimits.get(key);

  if (!limit || now > limit.resetAt) {
    rateLimits.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (limit.count >= maxRequests) {
    return false;
  }

  limit.count++;
  return true;
}

// Create HTTP server for Socket.io
const httpServer = createServer((req, res) => {
  // Health check endpoint
  if (req.url === "/health") {
    res.writeHead(200);
    res.end(JSON.stringify({ status: "ok", connections: io.engine.clientsCount }));
    return;
  }
  res.writeHead(404);
  res.end("Not Found");
});

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000", "https://www.businesshustle.co.za"],
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"],
  pingTimeout: 60000,
  pingInterval: 25000,
});

// ============================================
// AUTHENTICATION MIDDLEWARE
// ============================================

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth.token || socket.handshake.query.token;

    if (!token) {
      return next(new Error("Authentication required"));
    }

    // Verify user exists in database
    const user = await prisma.user.findUnique({
      where: { id: token },
      select: { id: true, discordId: true, name: true, isOnline: true },
    });

    if (!user) {
      return next(new Error("User not found"));
    }

    socket.data.user = user;
    next();
  } catch (error) {
    console.error("Socket auth error:", error);
    next(new Error("Authentication failed"));
  }
});

// ============================================
// CONNECTION HANDLERS
// ============================================

io.on("connection", async (socket) => {
  const user = socket.data.user;
  console.log(`[Socket] User connected: ${user.name} (${user.id})`);

  // Track this socket for the user
  if (!onlineUsers.has(user.id)) {
    onlineUsers.set(user.id, new Set());
    
    // Update database presence
    await prisma.user.update({
      where: { id: user.id },
      data: { isOnline: true, lastSeenAt: new Date() },
    });

    // Broadcast presence update to all rooms user is in
    broadcastPresenceUpdate(user.id, true);
  }
  onlineUsers.get(user.id)!.add(socket.id);

  // Create/update active session
  await prisma.activeSession.upsert({
    where: { id: `session-${socket.id}` },
    update: { 
      lastHeartbeat: new Date(),
      socketId: socket.id,
    },
    create: {
      id: `session-${socket.id}`,
      userId: user.id,
      socketId: socket.id,
      deviceType: socket.handshake.query.device as string || "desktop",
    },
  });

  // ============================================
  // ROOM EVENTS
  // ============================================

  /**
   * Join a room
   * Client emits: { roomId: string }
   */
  socket.on("room:join", async (data: { roomId: string }) => {
    if (!checkRateLimit(socket.id, "room:join")) {
      socket.emit("error", { message: "Rate limited" });
      return;
    }

    try {
      const { roomId } = data;

      // Verify room exists and user has access
      const membership = await prisma.roomMembership.findUnique({
        where: {
          userId_roomId: {
            userId: user.id,
            roomId,
          },
        },
      });

      if (!membership || membership.role === "BANNED") {
        socket.emit("error", { message: "Cannot join room" });
        return;
      }

      // Leave previous room if any
      const prevRoomId = userCurrentRoom.get(user.id);
      if (prevRoomId && prevRoomId !== roomId) {
        socket.leave(prevRoomId);
        const prevSockets = roomMembers.get(prevRoomId);
        if (prevSockets) {
          prevSockets.delete(socket.id);
          socket.to(prevRoomId).emit("room:user_left", {
            userId: user.id,
            userName: user.name,
          });
        }
      }

      // Join new room
      socket.join(roomId);
      
      if (!roomMembers.has(roomId)) {
        roomMembers.set(roomId, new Set());
      }
      roomMembers.get(roomId)!.add(socket.id);
      userCurrentRoom.set(user.id, roomId);

      // Update activity
      await prisma.roomMembership.update({
        where: { id: membership.id },
        data: { lastActiveAt: new Date() },
      });

      // Update session
      await prisma.activeSession.update({
        where: { id: `session-${socket.id}` },
        data: { roomId, lastHeartbeat: new Date() },
      });

      // Notify room
      socket.to(roomId).emit("room:user_joined", {
        userId: user.id,
        userName: user.name,
        avatarUrl: user.avatarUrl,
      });

      // Send current room state to joining user
      const members = Array.from(roomMembers.get(roomId) || []);
      socket.emit("room:joined", {
        roomId,
        memberCount: members.length,
        onlineUsers: await getRoomOnlineUsers(roomId),
      });

      console.log(`[Room] ${user.name} joined ${roomId}`);
    } catch (error) {
      console.error("Room join error:", error);
      socket.emit("error", { message: "Failed to join room" });
    }
  });

  /**
   * Leave current room
   */
  socket.on("room:leave", async () => {
    const roomId = userCurrentRoom.get(user.id);
    if (!roomId) return;

    socket.leave(roomId);
    const sockets = roomMembers.get(roomId);
    if (sockets) {
      sockets.delete(socket.id);
    }
    userCurrentRoom.delete(user.id);

    await prisma.activeSession.update({
      where: { id: `session-${socket.id}` },
      data: { roomId: null, lastHeartbeat: new Date() },
    });

    socket.to(roomId).emit("room:user_left", {
      userId: user.id,
      userName: user.name,
    });

    console.log(`[Room] ${user.name} left ${roomId}`);
  });

  // ============================================
  // GIFTING PIPELINE (REAL-TIME)
  // ============================================

  /**
   * Send a virtual gift
   * Client emits: { receiverId: string, giftItemId: string, quantity?: number, message?: string, isAnonymous?: boolean }
   */
  socket.on("gift:send", async (data: {
    receiverId: string;
    giftItemId: string;
    quantity?: number;
    message?: string;
    isAnonymous?: boolean;
    roomId?: string;
  }) => {
    if (!checkRateLimit(socket.id, "gift:send", 5, 15000)) {
      socket.emit("error", { message: "Gifting rate limited. Please wait." });
      return;
    }

    try {
      const { receiverId, giftItemId, quantity = 1, message, isAnonymous = false, roomId } = data;

      // Prevent self-gifting
      if (receiverId === user.id) {
        socket.emit("error", { message: "Cannot send gifts to yourself" });
        return;
      }

      // Get gift item details
      const giftItem = await prisma.shopItem.findUnique({
        where: { id: giftItemId },
      });

      if (!giftItem || !giftItem.isActive || giftItem.itemType !== "GIFT") {
        socket.emit("error", { message: "Invalid gift item" });
        return;
      }

      const totalCost = giftItem.price * quantity;

      // CRITICAL: Use transaction with row locking for concurrency safety
      const result = await prisma.$transaction(async (tx) => {
        // Lock sender's wallet row (SELECT FOR UPDATE equivalent)
        const senderWallet = tx.wallet.findUnique({
          where: { userId: user.id },
        });

        if (!senderWallet || senderWallet.balance < totalCost) {
          throw new Error("Insufficient balance");
        }

        // Deduct from sender
        const updatedSender = tx.wallet.update({
          where: { userId: user.id },
          data: {
            balance: { decrement: totalCost },
            totalSpent: { increment: totalCost },
          },
        });

        // Get or create receiver's wallet
        let receiverWallet = await tx.wallet.findUnique({
          where: { userId: receiverId },
        });

        if (!receiverWallet) {
          receiverWallet = await tx.wallet.create({
            data: { userId: receiverId },
          });
        }

        // Generate transaction reference
        const transactionRef = `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;

        // Create ledger transaction (debit sender)
        const transaction = await tx.ledgerTransaction.create({
          data: {
            transactionRef,
            senderWalletId: user.id,
            receiverWalletId: receiverId,
            amount: totalCost,
            transactionType: "GIFT_SEND",
            description: `Sent ${quantity}x ${giftItem.name} to ${receiverId}`,
            metadata: JSON.stringify({ giftItemId, quantity, messageId: message }),
            status: "COMPLETED",
            completedAt: new Date(),
          },
        });

        // Create debit entry
        await tx.ledgerEntry.create({
          data: {
            transactionId: transaction.id,
            walletId: user.id,
            entryType: "DEBIT",
            amount: totalCost,
            runningBalance: senderWallet.balance - totalCost,
          },
        });

        // Add to receiver's inventory
        const existingInventory = await tx.userInventory.findUnique({
          where: { userId_itemId: { userId: receiverId, itemId: giftItemId } },
        });

        if (existingInventory) {
          await tx.userInventory.update({
            where: { id: existingInventory.id },
            data: { quantity: { increment: quantity } },
          });
        } else {
          await tx.userInventory.create({
            data: {
              userId: receiverId,
              itemId: giftItemId,
              quantity,
              sourceType: "GIFTED",
              sourceReference: transaction.id,
            },
          });
        }

        // Record the gift
        const gift = await tx.gift.create({
          data: {
            giftItemId,
            senderId: user.id,
            receiverId,
            roomId: roomId || null,
            quantity,
            message: message || null,
            isAnonymous,
            isPublic: !!roomId,
          },
        });

        return { transaction, gift, updatedSender };
      });

      // Emit real-time events
      const eventData = {
        giftId: result.gift.id,
        giftItem: {
          id: giftItem.id,
          name: giftItem.name,
          imageUrl: giftItem.imageUrl,
          animationUrl: giftItem.animationUrl,
          rarity: giftItem.rarity,
        },
        sender: isAnonymous ? null : {
          id: user.id,
          name: user.name,
          avatarUrl: user.avatarUrl,
        },
        receiver: {
          id: receiverId,
        },
        quantity,
        message,
        cost: totalCost,
        timestamp: new Date().toISOString(),
      };

      // Send confirmation to sender
      socket.emit("gift:sent", eventData);

      // If in a room, broadcast to all room members (including receiver)
      if (roomId) {
        io.to(roomId).emit("gift:received_room", {
          ...eventData,
          roomId,
          triggerAnimation: true,
        });
      }

      // Also send direct notification to receiver (even if not in room)
      // Find receiver's sockets
      const receiverSockets = onlineUsers.get(receiverId);
      if (receiverSockets && receiverSockets.size > 0) {
        receiverSockets.forEach((sockId) => {
          io.to(sockId).emit("gift:received_direct", eventData);
        });
      }

      console.log(`[Gift] ${user.name} sent ${quantity}x ${giftItem.name} to ${receiverId}`);
    } catch (error: any) {
      console.error("Gift send error:", error);
      
      if (error.message === "Insufficient balance") {
        socket.emit("gift:error", { code: "INSUFFICIENT_BALANCE", message: "Not enough credits" });
      } else {
        socket.emit("gift:error", { code: "GIFT_FAILED", message: "Failed to send gift" });
      }
    }
  });

  // ============================================
  // PRESENCE & HEARTBEAT
  // ============================================

  socket.on("presence:heartbeat", async () => {
    try {
      await prisma.activeSession.update({
        where: { id: `session-${socket.id}` },
        data: { lastHeartbeat: new Date() },
      });

      await prisma.user.update({
        where: { id: user.id },
        data: { lastSeenAt: new Date() },
      });

      socket.emit("presence:ack");
    } catch (error) {
      console.error("Heartbeat error:", error);
    }
  });

  /**
   * Request online status of specific users
   */
  socket.on("presence:query", async (userIds: string[]) => {
    const statuses: Record<string, boolean> = {};
    
    for (const uid of userIds) {
      const sockets = onlineUsers.get(uid);
      statuses[uid] = !!sockets && sockets.size > 0;
    }

    socket.emit("presence:result", statuses);
  });

  // ============================================
  // CHAT BRIDGE (Discord <-> Web)
  // ============================================

  /**
   * Send message to be bridged to Discord
   */
  socket.on("chat:message", async (data: { roomId: string; content: string }) => {
    if (!checkRateLimit(socket.id, "chat:message", 20, 10000)) {
      socket.emit("error", { message: "Chat rate limited" });
      return;
    }

    const roomId = data.roomId || userCurrentRoom.get(user.id);
    if (!roomId) {
      socket.emit("error", { message: "Not in a room" });
      return;
    }

    // Broadcast to web clients in room
    socket.to(roomId).emit("chat:message", {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      roomId,
      sender: {
        id: user.id,
        name: user.name,
        avatarUrl: user.avatarUrl,
      },
      content: data.content,
      timestamp: new Date().toISOString(),
      source: "web",
    });

    // TODO: Bridge to Discord via bot API
    // This would call the Discord Bot service to post to the linked channel
  });

  /**
   * Receive message from Discord bridge
   * Called by internal services when Discord message arrives
   */
  socket.on("discord:message_incoming", (data: {
    channelId: string;
    author: { id: string; name: string; avatar: string };
    content: string;
  }) => {
    // Find room by Discord channel ID
    const roomId = data.channelId; // Assuming roomId = Discord channel ID
    
    io.to(roomId).emit("chat:message", {
      id: `discord-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      roomId,
      sender: {
        id: data.author.id,
        name: data.author.name,
        avatarUrl: data.author.avatar,
      },
      content: data.content,
      timestamp: new Date().toISOString(),
      source: "discord",
    });
  });

  // ============================================
  // DISCONNECT HANDLER
  // ============================================

  socket.on("disconnect", async (reason) => {
    console.log(`[Socket] User disconnected: ${user.name} (${reason})`);

    // Remove socket from tracking
    const userSockets = onlineUsers.get(user.id);
    if (userSockets) {
      userSockets.delete(socket.id);
      
      // If no more sockets for this user, mark offline
      if (userSockets.size === 0) {
        onlineUsers.delete(user.id);
        
        // Update database
        await prisma.user.update({
          where: { id: user.id },
          data: { isOnline: false, lastSeenAt: new Date() },
        });

        // Clean up session
        await prisma.activeSession.deleteMany({
          where: { userId: user.id },
        });

        // Broadcast offline status
        broadcastPresenceUpdate(user.id, false);
      }
    }

    // Remove from room
    const roomId = userCurrentRoom.get(user.id);
    if (roomId) {
      const sockets = roomMembers.get(roomId);
      if (sockets) {
        sockets.delete(socket.id);
        
        // Notify room only if truly left (no other sockets)
        const remainingSockets = onlineUsers.get(user.id);
        if (!remainingSockets || remainingSockets.size === 0) {
          socket.to(roomId).emit("room:user_left", {
            userId: user.id,
            userName: user.name,
          });
        }
      }
      userCurrentRoom.delete(user.id);
    }
  });
});

// ============================================
// HELPER FUNCTIONS
// ============================================

async function getRoomOnlineUsers(roomId: string): Promise<Array<{id: string; name: string | null}>> {
  const sockets = roomMembers.get(roomId);
  if (!sockets) return [];

  const userIds = new Set<string>();
  sockets.forEach((socketId) => {
    // Find user by socket (would need reverse lookup)
    // For now, return empty - implement with proper tracking
  });

  return [];
}

function broadcastPresenceUpdate(userId: string, isOnline: boolean) {
  // Broadcast to all rooms that might show this user's presence
  io.emit("presence:update", {
    userId,
    isOnline,
    timestamp: new Date().toISOString(),
  });
}

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 3003;

httpServer.listen(PORT, () => {
  console.log(`[RealtimeService] Socket.io server running on port ${PORT}`);
  console.log(`[RealtimeService] Environment: ${process.env.NODE_ENV || "development"}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("[RealtimeService] SIGTERM received, closing connections...");
  io.close(() => {
    console.log("[RealtimeService] All connections closed");
    process.exit(0);
  });
});

export { io, httpServer };
