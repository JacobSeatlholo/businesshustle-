import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/user - Get user profile
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id") || searchParams.get("userId");
    const discordId = searchParams.get("discordId");

    let user;

    if (discordId) {
      user = await db.user.findUnique({
        where: { discordId },
        include: {
          wallet: true,
          inventory: {
            where: { isActive: true, isEquipped: true },
            include: { item: true },
            take: 10,
          },
          _count: {
            select: {
              sentTransactions: {
                where: { status: "COMPLETED" },
              },
              receivedTransactions: {
                where: { status: "COMPLETED" },
              },
              giftSent: true,
              giftReceived: true,
            },
          },
        },
      });
    } else if (userId) {
      user = await db.user.findUnique({
        where: { id: userId },
        include: {
          wallet: true,
          inventory: {
            where: { isActive: true, isEquipped: true },
            include: { item: true },
            take: 10,
          },
          _count: {
            select: {
              sentTransactions: {
                where: { status: "COMPLETED" },
              },
              receivedTransactions: {
                where: { status: "COMPLETED" },
              },
              giftSent: true,
              giftReceived: true,
            },
          },
        },
      });
    }

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(formatUserProfile(user));
  } catch (error) {
    console.error("User fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }

  function formatUserProfile(user: any) {
    // Calculate level progress
    const xpForCurrentLevel = user.level * 1000;
    const xpForNextLevel = (user.level + 1) * 1000;
    const progressToNext = Math.min(100, 
      ((user.experiencePoints - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100
    );

    // Get equipped items by type
    const equippedItems = user.inventory.reduce((acc: any, inv: any) => {
      acc[inv.item.itemType] = inv.item;
      return acc;
    }, {});

    return {
      id: user.id,
      discordId: user.discordId,
      email: user.email,
      name: user.name,
      displayName: user.displayName || user.name,
      avatarUrl: user.avatarUrl,
      bannerUrl: user.bannerUrl,
      bio: user.bio,
      level: user.level,
      experiencePoints: user.experiencePoints,
      levelProgress: Math.max(0, progressToNext),
      reputationScore: user.reputationScore,
      isOnline: user.isOnline,
      lastSeenAt: user.lastSeenAt,
      createdAt: user.createdAt,
      wallet: user.wallet ? {
        balance: user.wallet.balance,
        balanceFormatted: (user.wallet.balance / 100).toFixed(2),
        totalEarned: user.wallet.totalEarned,
        totalSpent: user.wallet.totalSpent,
      } : null,
      equippedItems,
      stats: {
        transactionsSent: user._count.sentTransactions,
        transactionsReceived: user._count.receivedTransactions,
        giftsSent: user._count.giftSent,
        giftsReceived: user._count.giftReceived,
      },
    };
  }
}

// PATCH /api/user - Update user profile
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { userId, displayName, bio, bannerUrl } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "UserId required" },
        { status: 400 }
      );
    }

    // Build update data with only provided fields
    const updateData: any = {};
    
    if (displayName !== undefined) {
      if (displayName.length > 30) {
        return NextResponse.json(
          { error: "Display name too long (max 30 chars)" },
          { status: 400 }
        );
      }
      updateData.displayName = displayName.trim();
    }

    if (bio !== undefined) {
      if (bio.length > 500) {
        return NextResponse.json(
          { error: "Bio too long (max 500 chars)" },
          { status: 400 }
        );
      }
      updateData.bio = bio.trim();
    }

    if (bannerUrl !== undefined) {
      updateData.bannerUrl = bannerUrl;
    }

    const updated = await db.user.update({
      where: { id: userId },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      user: {
        id: updated.id,
        displayName: updated.displayName,
        bio: updated.bio,
        bannerUrl: updated.bannerUrl,
      },
    });
  } catch (error) {
    console.error("User update error:", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}
