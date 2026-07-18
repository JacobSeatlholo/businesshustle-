import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/inventory - Get user's inventory
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const type = searchParams.get("type"); // Filter by item type
    const equippedOnly = searchParams.get("equipped") === "true";

    if (!userId) {
      return NextResponse.json(
        { error: "UserId required" },
        { status: 400 }
      );
    }

    // Build where clause
    const where: any = {
      userId,
      isActive: true,
    };

    if (type) {
      where.item = { itemType: type.toUpperCase() };
    }

    if (equippedOnly) {
      where.isEquipped = true;
    }

    const inventory = await db.userInventory.findMany({
      where,
      include: {
        item: {
          include: {
            category: { select: { id: true, name: true, icon: true } },
          },
        },
      },
      orderBy: [
        { isEquipped: "desc" },
        { purchasedAt: "desc" },
      ],
    });

    // Group by type for easier frontend consumption
    const grouped = inventory.reduce((acc, inv) => {
      const itemType = inv.item.itemType;
      if (!acc[itemType]) {
        acc[itemType] = [];
      }
      acc[itemType].push(formatInventoryItem(inv));
      return acc;
    }, {} as Record<string, any[]>);

    // Get counts
    const totalCount = inventory.reduce((sum, inv) => sum + inv.quantity, 0);
    const typeCounts = Object.keys(grouped).reduce((acc, type) => {
      acc[type] = grouped[type].reduce((sum, item) => sum + item.quantity, 0);
      return acc;
    }, {} as Record<string, number>);

    return NextResponse.json({
      items: inventory.map(formatInventoryItem),
      grouped,
      totalCount,
      typeCounts,
    });
  } catch (error) {
    console.error("Inventory fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch inventory" },
      { status: 500 }
    );
  }
}

// POST /api/inventory/equip - Equip/unequip an item
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, inventoryId, equip = true } = body;

    if (!userId || !inventoryId) {
      return NextResponse.json(
        { error: "Missing userId or inventoryId" },
        { status: 400 }
      );
    }

    // Verify ownership
    const inventoryItem = await db.userInventory.findFirst({
      where: {
        id: inventoryId,
        userId,
        isActive: true,
      },
      include: { item: true },
    });

    if (!inventoryItem) {
      return NextResponse.json(
        { error: "Item not found in inventory" },
        { status: 404 }
      );
    }

    // For certain item types, only one can be equipped at a time
    const singleEquipTypes = ["AVATAR_FRAME", "BADGE", "THEME"];
    
    if (equip && singleEquipTypes.includes(inventoryItem.item.itemType)) {
      // Unequip other items of same type
      await db.userInventory.updateMany({
        where: {
          userId,
          isActive: true,
          item: { itemType: inventoryItem.item.itemType },
          isEquipped: true,
        },
        data: { isEquipped: false, equippedAt: null },
      });
    }

    // Update equipment status
    const updated = await db.userInventory.update({
      where: { id: inventoryId },
      data: {
        isEquipped: equip,
        equippedAt: equip ? new Date() : null,
      },
      include: { item: true },
    });

    return NextResponse.json({
      success: true,
      item: formatInventoryItem(updated),
      message: equip ? "Item equipped" : "Item unequipped",
    });
  } catch (error) {
    console.error("Inventory update error:", error);
    return NextResponse.json(
      { error: "Failed to update inventory" },
      { status: 500 }
    );
  }
}

function formatInventoryItem(inv: any) {
  return {
    id: inv.id,
    itemId: inv.itemId,
    quantity: inv.quantity,
    isEquipped: inv.isEquipped,
    equippedAt: inv.equippedAt,
    purchasedAt: inv.purchasedAt,
    expiresAt: inv.expiresAt,
    sourceType: inv.sourceType,
    isExpired: inv.expiresAt ? new Date() > inv.expiresAt : false,
    daysRemaining: inv.expiresAt 
      ? Math.max(0, Math.ceil((new Date(inv.expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
      : null,
    item: {
      id: inv.item.id,
      name: inv.item.name,
      description: inv.item.description,
      itemType: inv.item.itemType,
      imageUrl: inv.item.imageUrl,
      animationUrl: inv.item.animationUrl,
      rarity: inv.item.rarity,
      category: inv.item.category,
    },
  };
}
