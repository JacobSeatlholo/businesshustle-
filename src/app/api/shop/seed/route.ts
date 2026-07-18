import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// POST /api/shop/seed - Seed sample shop data
export async function POST() {
  try {
    // Check if data already exists
    const existingItems = await db.shopItem.count();
    if (existingItems > 0) {
      return NextResponse.json({ message: "Shop already has items", count: existingItems });
    }

    // Create categories
    const categories = await Promise.all([
      db.shopCategory.create({
        data: { name: "Gifts", description: "Send to friends", icon: "🎁", sortOrder: 1 },
      }),
      db.shopCategory.create({
        data: { name: "Badges", description: "Profile badges", icon: "🏆", sortOrder: 2 },
      }),
      db.shopCategory.create({
        data: { name: "Themes", description: "Chat room themes", icon: "🎨", sortOrder: 3 },
      }),
      db.shopCategory.create({
        data: { name: "Effects", description: "Room animations", icon: "✨", sortOrder: 4 },
      }),
    ]);

    // Create sample items
    const items = [
      // GIFTS
      {
        categoryId: categories[0].id,
        name: "Rose Bouquet",
        description: "A beautiful bouquet of red roses. Classic and romantic.",
        itemType: "GIFT",
        price: 50, // $0.50
        imageUrl: null,
        animationUrl: null,
        rarity: "COMMON",
        attributes: JSON.stringify({ emoji: "🌹" }),
      },
      {
        categoryId: categories[0].id,
        name: "Diamond Ring",
        description: "Sparkling diamond ring for that special someone.",
        itemType: "GIFT",
        price: 500, // $5.00
        imageUrl: null,
        animationUrl: null,
        rarity: "RARE",
        attributes: JSON.stringify({ emoji: "💍" }),
      },
      {
        categoryId: categories[0].id,
        name: "Golden Crown",
        description: "Fit for royalty. Make them feel like king/queen.",
        itemType: "GIFT",
        price: 2000, // $20.00
        imageUrl: null,
        animationUrl: null,
        rarity: "LEGENDARY",
        attributes: JSON.stringify({ emoji: "👑" }),
      },
      {
        categoryId: categories[0].id,
        name: "Heart Balloons",
        description: "Bunch of heart-shaped balloons floating with love.",
        itemType: "GIFT",
        price: 100, // $1.00
        imageUrl: null,
        animationUrl: null,
        rarity: "UNCOMMON",
        attributes: JSON.stringify({ emoji: "🎈" }),
      },
      {
        categoryId: categories[0].id,
        name: "Magic Potion",
        description: "A mysterious glowing potion. What will it do?",
        itemType: "GIFT",
        price: 250, // $2.50
        imageUrl: null,
        animationUrl: null,
        rarity: "EPIC",
        attributes: JSON.stringify({ emoji: "🧪" }),
      },

      // BADGES
      {
        categoryId: categories[1].id,
        name: "Early Adopter",
        description: "For those who joined the platform early.",
        itemType: "BADGE",
        price: 0, // Free
        rarity: "COMMON",
        attributes: JSON.stringify({ emoji: "⭐" }),
      },
      {
        categoryId: categories[1].id,
        name: "Top Gifter",
        description: "Awarded for sending 100+ gifts.",
        itemType: "BADGE",
        price: 1000,
        rarity: "RARE",
        attributes: JSON.stringify({ emoji: "🎁" }),
      },
      {
        categoryId: categories[1].id,
        name: "VIP Status",
        description: "Premium member badge. Shows everywhere.",
        itemType: "BADGE",
        price: 5000,
        rarity: "LEGENDARY",
        attributes: JSON.stringify({ emoji: "💎" }),
      },

      // THEMES
      {
        categoryId: categories[2].id,
        name: "Neon Nights",
        description: "Cyberpunk-inspired neon theme with glowing accents.",
        itemType: "THEME",
        price: 1500,
        rarity: "EPIC",
        durationType: "TEMPORARY",
        durationDays: 30,
        attributes: JSON.stringify({ colors: ["#FF00FF", "#00FFFF"] }),
      },
      {
        categoryId: categories[2].id,
        name: "Golden Luxury",
        description: "Elegant gold and black theme for the sophisticated.",
        itemType: "THEME",
        price: 3000,
        rarity: "LEGENDARY",
        attributes: JSON.stringify({ colors: ["#FFD700", "#000000"] }),
      },

      // EFFECTS
      {
        categoryId: categories[3].id,
        name: "Confetti Burst",
        description: "Colorful confetti explosion in the room.",
        itemType: "EFFECT",
        price: 200,
        rarity: "UNCOMMON",
        durationType: "CONSUMABLE",
        attributes: JSON.stringify({ type: "confetti", duration: 3000 }),
      },
      {
        categoryId: categories[3].id,
        name: "Fireworks Show",
        description: "Spectacular fireworks display for everyone.",
        itemType: "EFFECT",
        price: 500,
        rarity: "RARE",
        durationType: "CONSUMABLE",
        attributes: JSON.stringify({ type: "fireworks", duration: 5000 }),
      },
      {
        categoryId: categories[3].id,
        name: "Aurora Borealis",
        description: "Mesmerizing northern lights effect across the room.",
        itemType: "EFFECT",
        price: 1500,
        rarity: "LEGENDARY",
        durationType: "CONSUMABLE",
        attributes: JSON.stringify({ type: "aurora", duration: 8000 }),
      },
    ];

    const createdItems = await Promise.all(
      items.map((item) => db.shopItem.create({ data: item }))
    );

    return NextResponse.json({
      success: true,
      message: `Created ${createdItems.length} shop items across ${categories.length} categories`,
      categories: categories.length,
      items: createdItems.length,
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed shop data" },
      { status: 500 }
    );
  }
}
