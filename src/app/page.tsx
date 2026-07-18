"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Discord, 
  GiftIcon, 
  WalletIcon, 
  ShopIcon, 
  UsersIcon,
  SparklesIcon,
  CoinsIcon,
  LogOut
} from "@/components/ui/icons";

// Types
interface ShopItem {
  id: string;
  name: string;
  description: string;
  itemType: string;
  price: number;
  priceFormatted: string;
  imageUrl?: string;
  animationUrl?: string;
  rarity: string;
  category?: { id: string; name: string; icon?: string };
}

interface WalletData {
  balance: number;
  balanceFormatted: string;
  totalEarned: number;
  totalSpent: number;
}

interface Room {
  id: string;
  name: string;
  type: string;
  currentMemberCount: number;
  maxMembers: number;
}

interface GiftEvent {
  giftId: string;
  giftItem: ShopItem;
  sender: { id: string; name: string; avatarUrl?: string } | null;
  receiver: { id: string };
  quantity: number;
  message?: string;
  triggerAnimation?: boolean;
}

// Rarity colors
const rarityColors: Record<string, string> = {
  COMMON: "bg-gray-500",
  UNCOMMON: "bg-green-500",
  RARE: "bg-blue-500",
  EPIC: "bg-purple-500",
  LEGENDARY: "bg-yellow-500",
};

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // State
  const [activeTab, setActiveTab] = useState("home");
  const [wallet, setWallet] = useState<WalletData | null>(null);
  const [shopItems, setShopItems] = useState<ShopItem[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [onlineCount, setOnlineCount] = useState(0);
  const [recentGifts, setRecentGifts] = useState<GiftEvent[]>([]);
  const [showGiftAnimation, setShowGiftAnimation] = useState<GiftEvent | null>(null);
  const [giftRecipient, setGiftRecipient] = useState("");
  const [selectedGiftItem, setSelectedGiftItem] = useState<ShopItem | null>(null);

  // Ref for animation canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Initialize Socket.io connection
  useEffect(() => {
    if (status !== "authenticated" || !session?.user?.id) return;

    const socketInstance = io(process.env.NEXT_PUBLIC_REALTIME_URL || "/", {
      auth: { token: session.user.id },
      transports: ["websocket", "polling"],
    });

    socketInstance.on("connect", () => {
      console.log("[Socket] Connected");
      setIsConnected(true);
      
      // Join a demo room
      socketInstance.emit("room:join", { roomId: "demo-room-public" });
    });

    socketInstance.on("disconnect", () => {
      console.log("[Socket] Disconnected");
      setIsConnected(false);
    });

    // Handle incoming gifts
    socketInstance.on("gift:received_room", (event: GiftEvent) => {
      setRecentGifts(prev => [event, ...prev.slice(0, 19)]);
      setShowGiftAnimation(event);
      
      // Auto-hide animation after 5 seconds
      setTimeout(() => setShowGiftAnimation(null), 5000);
    });

    // Handle gift confirmation
    socketInstance.on("gift:sent", (event: GiftEvent) => {
      // Refresh wallet after successful gift
      fetchWallet();
    });

    // Handle errors
    socketInstance.on("error", (error: any) => {
      console.error("[Socket Error]:", error.message);
    });

    // Presence updates
    socketInstance.on("presence:update", (data: any) => {
      console.log("[Presence]", data);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [status, session]);

  // Fetch wallet data
  const fetchWallet = useCallback(async () => {
    try {
      const res = await fetch("/api/wallet");
      if (res.ok) {
        const data = await res.json();
        setWallet(data);
      }
    } catch (error) {
      console.error("Failed to fetch wallet:", error);
    }
  }, []);

  // Fetch shop items
  const fetchShopItems = useCallback(async () => {
    try {
      const res = await fetch("/api/shop");
      if (res.ok) {
        const data = await res.json();
        setShopItems(data.items);
      }
    } catch (error) {
      console.error("Failed to fetch shop:", error);
    }
  }, []);

  // Fetch rooms
  const fetchRooms = useCallback(async () => {
    try {
      const res = await fetch("/api/rooms?userId=demo-user");
      if (res.ok) {
        const data = await res.json();
        setRooms(data.rooms || []);
      }
    } catch (error) {
      console.error("Failed to fetch rooms:", error);
    }
  }, []);

  // Initial data fetch
  useEffect(() => {
    if (status === "authenticated") {
      fetchWallet();
      fetchShopItems();
      fetchRooms();

      // Seed some demo data if needed
      seedDemoData();
    }
  }, [status, fetchWallet, fetchShopItems, fetchRooms]);

  // Send gift function
  const sendGift = async () => {
    if (!socket || !selectedGiftItem || !giftRecipient) return;

    socket.emit("gift:send", {
      receiverId: giftRecipient,
      giftItemId: selectedGiftItem.id,
      quantity: 1,
      message: "🎁 A special gift for you!",
      roomId: selectedRoom?.id || "demo-room-public",
    });
  };

  // Seed demo data
  const seedDemoData = async () => {
    try {
      // Check if we need to seed
      const shopRes = await fetch("/api/shop");
      const shopData = await shopRes.json();
      
      if (shopData.items.length === 0) {
        // Create sample shop categories and items
        await fetch("/api/shop/seed", { method: "POST" });
        fetchShopItems();
      }
    } catch (error) {
      console.log("Demo data seeding skipped or failed");
    }
  };

  // Draw confetti animation
  useEffect(() => {
    if (!showGiftAnimation || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    const colors = ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"];
    
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 15 - 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
      });
    }

    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed > 3000) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.3; // Gravity
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [showGiftAnimation]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Animation Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50"
        style={{ display: showGiftAnimation ? "block" : "none" }}
      />

      {/* Gift Animation Overlay */}
      {showGiftAnimation && (
        <div className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
          <div className="text-center animate-bounce">
            <div className="text-8xl mb-4">🎁</div>
            <div className="text-2xl font-bold text-yellow-400">
              {showGiftAnimation.giftItem.name}!
            </div>
            {!showGiftAnimation.sender?.id.includes("anonymous") && (
              <div className="text-lg text-gray-300 mt-2">
                From: {showGiftAnimation.sender?.name || "Anonymous"}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold">
              BH
            </div>
            <div>
              <h1 className="font-bold text-lg">BusinessHustle</h1>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
                {isConnected ? "Connected" : "Disconnected"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Wallet Display */}
            {wallet && (
              <Card className="bg-slate-800 border-slate-700 px-4 py-2">
                <div className="flex items-center gap-2">
                  <CoinsIcon className="w-5 h-5 text-yellow-400" />
                  <span className="font-mono font-bold text-yellow-400">
                    {wallet.balanceFormatted}
                  </span>
                  <span className="text-xs text-gray-400">BHC</span>
                </div>
              </Card>
            )}

            {/* User Avatar */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold">
                {session.user.name?.charAt(0)?.toUpperCase()}
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/api/auth/signout")}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-5 bg-slate-900 border-slate-800">
            <TabsTrigger value="home" className="data-[state=active]:bg-purple-600">
              🏠 Home
            </TabsTrigger>
            <TabsTrigger value="shop" className="data-[state=active]:bg-purple-600">
              <ShopIcon className="w-4 h-4 mr-1" />
              Shop
            </TabsTrigger>
            <TabsTrigger value="inventory" className="data-[state=active]:bg-purple-600">
              🎒 Items
            </TabsTrigger>
            <TabsTrigger value="rooms" className="data-[state=active]:bg-purple-600">
              <UsersIcon className="w-4 h-4 mr-1" />
              Rooms
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-purple-600">
              👤 Profile
            </TabsTrigger>
          </TabsList>

          {/* HOME TAB */}
          <TabsContent value="home" className="space-y-6">
            {/* Welcome Banner */}
            <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-700/50">
              <CardContent className="py-8">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold">
                    Welcome back, {session.user.name || "Hustler"}! 🚀
                  </h2>
                  <p className="text-gray-300">
                    Your real-time social economy is ready. Connect, gift, and thrive.
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                      Level {wallet ? Math.floor(wallet.balance / 1000) + 1 : 1}
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {onlineCount} Online
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      Discord Connected ✅
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-slate-900 border-slate-800 hover:border-purple-500 transition-colors cursor-pointer" onClick={() => setActiveTab("shop")}>
                <CardContent className="py-6 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                    <GiftIcon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold">Send Gifts</h3>
                  <p className="text-sm text-gray-400">Surprise friends with virtual gifts</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800 hover:border-purple-500 transition-colors cursor-pointer" onClick={() => setActiveTab("shop")}>
                <CardContent className="py-6 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                    <ShopIcon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold">Virtual Shop</h3>
                  <p className="text-sm text-gray-400">Browse cosmetics & collectibles</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800 hover:border-purple-500 transition-colors cursor-pointer" onClick={() => setActiveTab("rooms")}>
                <CardContent className="py-6 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                    <UsersIcon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold">Join Rooms</h3>
                  <p className="text-sm text-gray-400">Connect in real-time chat rooms</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity Feed */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 text-yellow-400" />
                  Live Activity
                </CardTitle>
                <CardDescription>Real-time gifting events across the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  {recentGifts.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      No recent activity. Be the first to send a gift! 🎁
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {recentGifts.map((gift, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
                          <span className="text-2xl">🎁</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm truncate">
                              <span className="font-medium">{gift.sender?.name || "Anonymous"}</span>
                              {" sent "}
                              <span className="text-purple-400 font-medium">{gift.giftItem.name}</span>
                            </p>
                            {gift.message && (
                              <p className="text-xs text-gray-500 truncate">"{gift.message}"</p>
                            )}
                          </div>
                          <Badge className={`${rarityColors[gift.giftItem.rarity] || "bg-gray-500"} text-white text-xs`}>
                            {gift.giftItem.rarity}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SHOP TAB */}
          <TabsContent value="shop" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Virtual Shop</h2>
                <p className="text-gray-400">Enhance your profile with exclusive items</p>
              </div>
              <Button
                onClick={async () => {
                  await fetch("/api/wallet", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ amount: 100, reason: "Test credits" }),
                  });
                  fetchWallet();
                }}
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10"
              >
                <CoinsIcon className="w-4 h-4 mr-2" />
                Add 100 BHC (Test)
              </Button>
            </div>

            {/* Item Categories Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {["ALL", "GIFT", "BADGE", "THEME", "EMOJI", "AVATAR_FRAME", "EFFECT"].map((type) => (
                <Badge
                  key={type}
                  variant="outline"
                  className="cursor-pointer whitespace-nowrap hover:bg-purple-500/20"
                >
                  {type.replace("_", " ")}
                </Badge>
              ))}
            </div>

            {/* Shop Items Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {shopItems.map((item) => (
                <Card
                  key={item.id}
                  className={`bg-slate-900 border-slate-800 hover:border-${rarityColors[item.rarity]?.replace("bg-", "") || "purple"}-500 transition-all group cursor-pointer ${
                    selectedGiftItem?.id === item.id ? "ring-2 ring-purple-500" : ""
                  }`}
                  onClick={() => setSelectedGiftItem(item)}
                >
                  <CardContent className="p-4 space-y-3">
                    {/* Item Image Placeholder */}
                    <div className={`aspect-square rounded-xl ${rarityColors[item.rarity] || "bg-slate-700"} flex items-center justify-center text-4xl relative overflow-hidden`}>
                      {getItemEmoji(item.itemType)}
                      
                      {/* Rarity Indicator */}
                      <div className={`absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-bold ${rarityColors[item.rarity]} text-white`}>
                        {item.rarity}
                      </div>
                    </div>

                    {/* Item Info */}
                    <div>
                      <h3 className="font-semibold truncate">{item.name}</h3>
                      <p className="text-sm text-gray-400 line-clamp-2">{item.description || "A premium virtual item"}</p>
                    </div>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-700">
                      <div className="flex items-center gap-1">
                        <CoinsIcon className="w-4 h-4 text-yellow-400" />
                        <span className="font-mono font-bold text-yellow-400">{item.priceFormatted}</span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePurchase(item);
                        }}
                      >
                        Buy
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Gift Panel */}
            {selectedGiftItem && (
              <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/50 sticky bottom-24">
                <CardContent className="py-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{getItemEmoji(selectedGiftItem.itemType)}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Send as Gift</h4>
                      <p className="text-sm text-gray-300">{selectedGiftItem.name} • {selectedGiftItem.priceFormatted} BHC</p>
                    </div>
                    <Input
                      placeholder="Recipient User ID"
                      value={giftRecipient}
                      onChange={(e) => setGiftRecipient(e.target.value)}
                      className="w-48 bg-slate-800 border-slate-700"
                    />
                    <Button
                      onClick={sendGift}
                      disabled={!giftRecipient}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                    >
                      <GiftIcon className="w-4 h-4 mr-2" />
                      Send Gift
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* INVENTORY TAB */}
          <TabsContent value="inventory" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">My Inventory</h2>
              <p className="text-gray-400">Your collection of virtual items and cosmetics</p>
            </div>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="py-12 text-center">
                <div className="text-6xl mb-4">🎒</div>
                <h3 className="text-xl font-semibold mb-2">Your inventory is empty</h3>
                <p className="text-gray-400 mb-4">Visit the shop to purchase items!</p>
                <Button onClick={() => setActiveTab("shop")} className="bg-purple-600 hover:bg-purple-700">
                  Browse Shop
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ROOMS TAB */}
          <TabsContent value="rooms" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Chat Rooms</h2>
              <p className="text-gray-400">Join real-time conversations powered by Discord</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Demo Room */}
              <Card
                className={`bg-slate-900 border-slate-800 hover:border-purple-500 transition-colors cursor-pointer ${
                  selectedRoom?.id === "demo" ? "ring-2 ring-purple-500" : ""
                }`}
                onClick={() => setSelectedRoom({ id: "demo", name: "General Chat", type: "PUBLIC", currentMemberCount: onlineCount, maxMembers: 100 })}
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl">
                      💬
                    </div>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      PUBLIC
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold">#general-chat</h3>
                    <p className="text-sm text-gray-400">Main lobby for all members</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <UsersIcon className="w-4 h-4" />
                      {onlineCount} online
                    </span>
                    <span className="text-green-400">● Active</span>
                  </div>
                </CardContent>
              </Card>

              {/* VIP Room */}
              <Card className="bg-slate-900 border-slate-800 hover:border-yellow-500 transition-colors opacity-75">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-2xl">
                      ⭐
                    </div>
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                      VIP
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold">#vip-lounge</h3>
                    <p className="text-sm text-gray-400">Exclusive area for premium members</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <UsersIcon className="w-4 h-4" />
                      42 members
                    </span>
                    <span className="text-yellow-400">🔒 Locked</span>
                  </div>
                </CardContent>
              </Card>

              {/* Trading Room */}
              <Card className="bg-slate-900 border-slate-800 hover:border-blue-500 transition-colors">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-2xl">
                      💰
                    </div>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      PUBLIC
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold">#trading-post</h3>
                    <p className="text-sm text-gray-400">Buy, sell, and trade virtual items</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <UsersIcon className="w-4 h-4" />
                      128 members
                    </span>
                    <span className="text-green-400">● Active</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Selected Room View */}
            {selectedRoom && (
              <Card className="bg-slate-900 border-purple-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>💬</span>
                    {selectedRoom.name}
                  </CardTitle>
                  <CardDescription>
                    Connected via Discord bridge • Real-time messaging enabled
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-slate-950 rounded-lg p-4 space-y-3 overflow-y-auto">
                    <div className="text-center text-gray-500 text-sm py-8">
                      <p>Welcome to #{selectedRoom.name.toLowerCase().replace(/\s+/g, "-")}!</p>
                      <p className="mt-2">Messages will appear here when connected.</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      className="flex-1 bg-slate-800 border-slate-700"
                      disabled={!isConnected}
                    />
                    <Button disabled={!isConnected} className="bg-purple-600 hover:bg-purple-700">
                      Send
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* PROFILE TAB */}
          <TabsContent value="profile" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Profile Settings</h2>
              <p className="text-gray-400">Manage your BusinessHustle identity</p>
            </div>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="py-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Avatar Section */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold">
                      {session.user.name?.charAt(0)?.toUpperCase()}
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      Change Avatar
                    </Button>
                  </div>

                  {/* Info Section */}
                  <div className="flex-1 space-y-4 w-full">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">Display Name</label>
                        <Input
                          defaultValue={session.user.name || ""}
                          className="bg-slate-800 border-slate-700"
                          placeholder="Your display name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">Email</label>
                        <Input
                          defaultValue={session.user.email || ""}
                          disabled
                          className="bg-slate-800 border-slate-700 opacity-60"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Bio</label>
                      <textarea
                        className="w-full h-24 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Tell us about yourself..."
                        maxLength={500}
                      />
                    </div>

                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="py-6 text-center space-y-2">
                  <div className="text-3xl font-bold text-yellow-400">
                    {wallet?.balanceFormatted || "0.00"}
                  </div>
                  <div className="text-sm text-gray-400">Current Balance</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="py-6 text-center space-y-2">
                  <div className="text-3xl font-bold text-green-400">
                    {wallet ? (wallet.totalEarned / 100).toFixed(2) : "0.00"}
                  </div>
                  <div className="text-sm text-gray-400">Total Earned</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="py-6 text-center space-y-2">
                  <div className="text-3xl font-bold text-blue-400">
                    Level {wallet ? Math.floor(wallet.balance / 1000) + 1 : 1}
                  </div>
                  <div className="text-sm text-gray-400">Account Level</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur border-t border-slate-800 py-3 z-20">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm text-gray-400">
          <span>© 2024 BusinessHustle.co.za — Powered by Discord</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );

  async function handlePurchase(item: ShopItem) {
    try {
      const res = await fetch("/api/shop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: session?.user?.id,
          itemId: item.id,
          quantity: 1,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert(`✅ Purchased ${item.name}!\nNew Balance: ${data.purchase.newBalanceFormatted}`);
        fetchWallet();
      } else {
        alert(`❌ Purchase failed: ${data.error}`);
      }
    } catch (error) {
      alert("❌ Purchase failed. Please try again.");
    }
  }

  function getItemEmoji(type: string): string {
    const emojis: Record<string, string> = {
      GIFT: "🎁",
      BADGE: "🏆",
      THEME: "🎨",
      EMOJI: "😀",
      AVATAR_FRAME: "🖼️",
      EFFECT: "✨",
    };
    return emojis[type] || "📦";
  }
}
