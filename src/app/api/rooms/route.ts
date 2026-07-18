import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/rooms - List available rooms
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const userId = searchParams.get("userId"); // For getting user's rooms

    let where: any = { isActive: true };

    if (type) {
      where.type = type.toUpperCase();
    }

    if (userId) {
      // Get rooms user is member of
      const memberships = await db.roomMembership.findMany({
        where: {
          userId,
          role: { notIn: ["BANNED"] },
        },
        include: {
          room: {
            where: { isActive: true },
            include: {
              _count: {
                select: { members: true },
              },
            },
          },
        },
        orderBy: { lastActiveAt: "desc" },
      });

      const rooms = memberships
        .filter(m => m.room)
        .map(m => formatRoom(m.room, m.role));

      return NextResponse.json({ rooms });
    }

    // Public room listing
    if (!userId || !type) {
      where.type = "PUBLIC";
    }

    const rooms = await db.room.findMany({
      where,
      include: {
        creator: {
          select: { id: true, name: true, avatarUrl: true },
        },
        _count: {
          select: { members: true, gifts: true },
        },
      },
      orderBy: { currentMemberCount: "desc" },
      take: 50,
    });

    return NextResponse.json({
      rooms: rooms.map(r => formatRoom(r)),
    });
  } catch (error) {
    console.error("Rooms fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch rooms" },
      { status: 500 }
    );
  }
}

// POST /api/rooms - Create a new room
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, type = "PUBLIC", maxMembers = 100, createdBy, roomId } = body;

    if (!name || !createdBy || !roomId) {
      return NextResponse.json(
        { error: "Missing required fields: name, roomId, createdBy" },
        { status: 400 }
      );
    }

    if (name.length > 50) {
      return NextResponse.json(
        { error: "Room name too long (max 50 chars)" },
        { status: 400 }
      );
    }

    // Check if room with this Discord ID already exists
    const existing = await db.room.findUnique({
      where: { roomId },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Room with this Discord channel already exists" },
        { status: 409 }
      );
    }

    const room = await db.$transaction(async (tx) => {
      // Create room
      const newRoom = await tx.room.create({
        data: {
          name,
          description,
          type: type.toUpperCase(),
          maxMembers,
          roomId, // Discord channel ID
          createdBy,
        },
      });

      // Add creator as owner
      await tx.roomMembership.create({
        data: {
          userId: createdBy,
          roomId: newRoom.id,
          role: "OWNER",
        },
      });

      return newRoom;
    });

    return NextResponse.json({
      success: true,
      room: formatRoom(room, "OWNER"),
    }, { status: 201 });
  } catch (error) {
    console.error("Room creation error:", error);
    return NextResponse.json(
      { error: "Failed to create room" },
      { status: 500 }
    );
  }
}

// POST /api/rooms/join - Join a room
export async function joinRoom(request: Request) {
  try {
    const body = await request.json();
    const { userId, roomId } = body;

    if (!userId || !roomId) {
      return NextResponse.json(
        { error: "Missing userId or roomId" },
        { status: 400 }
      );
    }

    const room = await db.room.findUnique({
      where: { id: roomId },
    });

    if (!room || !room.isActive) {
      return NextResponse.json(
        { error: "Room not found" },
        { status: 404 }
      );
    }

    // Check if already a member
    const existing = await db.roomMembership.findUnique({
      where: { userId_roomId: { userId, roomId } },
    });

    if (existing) {
      if (existing.role === "BANNED") {
        return NextResponse.json(
          { error: "You are banned from this room" },
          { status: 403 }
        );
      }
      
      // Reactivate membership
      await db.roomMembership.update({
        where: { id: existing.id },
        data: { 
          role: "MEMBER",
          isMuted: false,
          muteUntil: null,
          lastActiveAt: new Date(),
        },
      });
    } else {
      // Check capacity
      if (room.currentMemberCount >= room.maxMembers) {
        return NextResponse.json(
          { error: "Room is full" },
          { status: 400 }
        );
      }

      // Check VIP requirement
      if (room.type === "VIP") {
        // TODO: Check if user has premium status
      }

      // Create membership
      await db.roomMembership.create({
        data: {
          userId,
          roomId,
          role: "MEMBER",
        },
      });

      // Update member count
      await db.room.update({
        where: { id: roomId },
        data: { currentMemberCount: { increment: 1 } },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Room join error:", error);
    return NextResponse.json(
      { error: "Failed to join room" },
      { status: 500 }
    );
  }
}

function formatRoom(room: any, userRole?: string) {
  return {
    id: room.id,
    name: room.name,
    description: room.description,
    discordChannelId: room.roomId,
    type: room.type,
    maxMembers: room.maxMembers,
    currentMemberCount: room.currentMemberCount || room._count?.members || 0,
    themeId: room.themeId,
    userRole: userRole,
    createdAt: room.createdAt,
    creator: room.creator,
    stats: room._count ? {
      members: room._count.members,
      gifts: room._count.gifts,
    } : null,
  };
}
