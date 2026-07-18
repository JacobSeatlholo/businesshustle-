import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/shop - Get all shop items with categories
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const type = searchParams.get("type");
    const rarity = searchParams.get("rarity");

    // Build where clause
    const where: any = { isActive: true };
    
    if (category) {
      where.categoryId = category;
    }
    
    if (type) {
      where.itemType = type.toUpperCase();
    }

    if (rarity) {
      where.rarity = rarity.toUpperCase();
    }

    // Fetch categories and items
    const [categories, items] = await Promise.all([
      db.shopCategory.findMany({
        where: { isActive: true },
        orderBy: { sortOrder: "asc" },
        include: {
          _count: {
            select: { items: { where: { isActive: true } } },
          },
        },
      }),
      db.shopItem.findMany({
        where,
        include: {
          category: {
            select: { id: true, name: true, icon: true },
          },
        },
        orderBy: [
          { rarity: "desc" }, // LEGENDARY first
          { price: "asc" },
        ],
      }),
    ]);

    return NextResponse.json({
      categories,
      items: items.map(formatItem),
    });
  } catch (error) {
    console.error("Shop fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch shop" },
      { status: 500 }
    );
  }
}

// POST /api/shop/purchase - Purchase an item
export async function POST(request: Request) {
  try {
    // Note: In production, get session from auth
    // For now, accept userId from body (should be from session)
    const body = await request.json();
    const { userId, itemId, quantity = 1 } = body;

    if (!userId || !itemId) {
      return NextResponse.json(
        { error: "Missing userId or itemId" },
        { status: 400 }
      );
    }

    if (quantity < 1 || quantity > 99) {
      return NextResponse.json(
        { error: "Quantity must be between 1 and 99" },
        { status: 400 }
      );
    }

    const result = await db.$transaction(async (tx) => {
      // Get item details
      const item = await tx.shopItem.findUnique({
        where: { id: itemId },
      });

      if (!item || !item.isActive) {
        throw new Error("Item not available");
      }

      // Check stock for limited items
      if (item.isLimited && item.stockRemaining !== null && item.stockRemaining < quantity) {
        throw new Error("Insufficient stock");
      }

      // Check user level requirement
      const user = await tx.user.findUnique({ where: { id: userId } });
      if (!user || user.level < item.requiredLevel) {
        throw new Error(`Level ${item.requiredLevel} required`);
      }

      const totalCost = item.price * quantity;

      // Get and lock wallet
      const wallet = await tx.wallet.findUnique({
        where: { userId },
      });

      if (!wallet || wallet.balance < totalCost) {
        throw new Error("Insufficient balance");
      }

      // Check ownership limit
      if (item.maxOwnedPerUser !== null) {
        const existing = await tx.userInventory.findUnique({
          where: { userId_itemId: { userId, itemId } },
        });

        if (existing && existing.quantity + quantity > item.maxOwnedPerUser) {
          throw new Error(`Maximum ownership limit reached (${item.maxOwnedPerUser})`);
        }
      }

      // Process purchase
      // 1. Deduct from wallet
      const updatedWallet = await tx.wallet.update({
        where: { userId },
        data: {
          balance: { decrement: totalCost },
          totalSpent: { increment: totalCost },
        },
      });

      // 2. Update stock if limited
      if (item.isLimited && item.stockRemaining !== null) {
        await tx.shopItem.update({
          where: { id: itemId },
          data: { stockRemaining: { decrement: quantity } },
        });
      }

      // 3. Create transaction record
      const transactionRef = `BUY-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
      
      const transaction = await tx.ledgerTransaction.create({
        data: {
          transactionRef,
          senderWalletId: userId,
          amount: totalCost,
          transactionType: "PURCHASE",
          description: `Purchased ${quantity}x ${item.name}`,
          metadata: JSON.stringify({ itemId, quantity }),
          status: "COMPLETED",
          completedAt: new Date(),
        },
      });

      // 4. Create ledger entry (debit)
      await tx.ledgerEntry.create({
        data: {
          transactionId: transaction.id,
          walletId: userId,
          entryType: "DEBIT",
          amount: totalCost,
          runningBalance: updatedWallet.balance,
        },
      });

      // 5. Add to inventory
      const existingInventory = await tx.userInventory.findUnique({
        where: { userId_itemId: { userId, itemId } },
      });

      let inventoryRecord;
      
      if (existingInventory) {
        inventoryRecord = await tx.userInventory.update({
          where: { id: existingInventory.id },
          data: { quantity: { increment: quantity } },
        });
      } else {
        inventoryRecord = await tx.userInventory.create({
          data: {
            userId,
            itemId,
            quantity,
            sourceType: "PURCHASED",
            sourceReference: transaction.id,
            expiresAt: item.durationType === "TEMPORARY" 
              ? new Date(Date.now() + (item.durationDays || 30) * 24 * 60 * 60 * 1000)
              : null,
          },
        });
      }

      return {
        transaction,
        inventory: inventoryRecord,
        newBalance: updatedWallet.balance,
        item,
        quantity,
        totalCost,
      };
    });

    return NextResponse.json({
      success: true,
      purchase: {
        transactionRef: result.transaction.transactionRef,
        item: formatItem(result.item),
        quantity: result.quantity,
        totalCost: result.totalCost,
        totalCostFormatted: (result.totalCost / 100).toFixed(2),
        newBalance: result.newBalance,
        newBalanceFormatted: (result.newBalance / 100).toFixed(2),
        inventoryId: result.inventory.id,
      },
    });
  } catch (error: any) {
    console.error("Purchase error:", error);
    
    const message = error.message || "Failed to process purchase";
    let code = "PURCHASE_FAILED";
    
    if (message.includes("balance")) code = "INSUFFICIENT_BALANCE";
    else if (message.includes("stock")) code = "OUT_OF_STOCK";
    else if (message.includes("Level")) code = "LEVEL_REQUIRED";
    else if (message.includes("limit")) code = "LIMIT_REACHED";

    return NextResponse.json(
      { error: message, code },
      { status: 400 }
    );
  }
}

function formatItem(item: any) {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    itemType: item.itemType,
    price: item.price,
    priceFormatted: (item.price / 100).toFixed(2),
    currencyCode: item.currencyCode,
    imageUrl: item.imageUrl,
    animationUrl: item.animationUrl,
    durationType: item.durationType,
    durationDays: item.durationDays,
    maxOwnedPerUser: item.maxOwnedPerUser,
    isLimited: item.isLimited,
    stockRemaining: item.stockRemaining,
    requiredLevel: item.requiredLevel,
    rarity: item.rarity,
    attributes: item.attributes ? JSON.parse(item.attributes) : null,
    category: item.category,
  };
}
