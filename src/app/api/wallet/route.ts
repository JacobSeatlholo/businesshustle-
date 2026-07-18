import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/wallet - Get current user's wallet
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const wallet = await db.wallet.findUnique({
      where: { userId: session.user.id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            displayName: true,
            avatarUrl: true,
            level: true,
          },
        },
      },
    });

    if (!wallet) {
      // Create wallet if doesn't exist
      const newWallet = await db.wallet.create({
        data: {
          userId: session.user.id,
          balance: 1000, // Starting bonus
          totalEarned: 1000,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              displayName: true,
              avatarUrl: true,
              level: true,
            },
          },
        },
      });
      return NextResponse.json(formatWalletResponse(newWallet));
    }

    return NextResponse.json(formatWalletResponse(wallet));
  } catch (error) {
    console.error("Wallet fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch wallet" },
      { status: 500 }
    );
  }

  function formatWalletResponse(wallet: any) {
    return {
      id: wallet.id,
      balance: wallet.balance, // in cents
      balanceFormatted: formatCurrency(wallet.balance),
      totalEarned: wallet.totalEarned,
      totalSpent: wallet.totalSpent,
      currencyCode: wallet.currencyCode,
      user: wallet.user,
    };
  }

  function formatCurrency(cents: number): string {
    return (cents / 100).toLocaleString("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 2,
    });
  }
}

// POST /api/wallet/top-up - Add credits (for testing/admin)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { amount, reason } = body;

    if (!amount || amount <= 0 || amount > 1000000) {
      return NextResponse.json(
        { error: "Invalid amount. Must be between 1 and 10,000 credits" },
        { status: 400 }
      );
    }

    const amountInCents = Math.round(amount * 100);

    const result = await db.$transaction(async (tx) => {
      // Get current wallet
      const wallet = await tx.wallet.findUnique({
        where: { userId: session!.user!.id },
      });

      if (!wallet) {
        throw new Error("Wallet not found");
      }

      // Update balance
      const updatedWallet = await tx.wallet.update({
        where: { userId: session!.user!.id },
        data: {
          balance: { increment: amountInCents },
          totalEarned: { increment: amountInCents },
        },
      });

      // Create transaction record
      const transactionRef = `TOPUP-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
      
      const transaction = await tx.ledgerTransaction.create({
        data: {
          transactionRef,
          receiverWalletId: session!.user!.id,
          amount: amountInCents,
          transactionType: "TOP_UP",
          description: reason || "Credit top-up",
          status: "COMPLETED",
          completedAt: new Date(),
        },
      });

      // Create credit entry
      await tx.ledgerEntry.create({
        data: {
          transactionId: transaction.id,
          walletId: session!.user!.id,
          entryType: "CREDIT",
          amount: amountInCents,
          runningBalance: updatedWallet.balance,
        },
      });

      return { wallet: updatedWallet, transaction };
    });

    return NextResponse.json({
      success: true,
      newBalance: result.wallet.balance,
      newBalanceFormatted: (result.wallet.balance / 100).toFixed(2),
      transactionRef: result.transaction.transactionRef,
    });
  } catch (error) {
    console.error("Top-up error:", error);
    return NextResponse.json(
      { error: "Failed to process top-up" },
      { status: 500 }
    );
  }
}
