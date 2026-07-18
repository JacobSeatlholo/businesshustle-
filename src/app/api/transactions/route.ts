import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/transactions - Get user's transaction history
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const type = searchParams.get("type"); // Filter by type
    const limit = Math.min(parseInt(searchParams.get("limit") || "20"), 100);
    const offset = parseInt(searchParams.get("offset") || "0");

    if (!userId) {
      return NextResponse.json(
        { error: "UserId required" },
        { status: 400 }
      );
    }

    // Build where clause
    const where: any = {
      OR: [
        { senderWalletId: userId },
        { receiverWalletId: userId },
      ],
      status: "COMPLETED",
    };

    if (type) {
      where.transactionType = type.toUpperCase();
    }

    // Fetch transactions with pagination
    const [transactions, totalCount] = await Promise.all([
      db.ledgerTransaction.findMany({
        where,
        include: {
          ledgerEntries: true,
        },
        orderBy: { completedAt: "desc" },
        take: limit,
        skip: offset,
      }),
      db.ledgerTransaction.count({ where }),
    ]);

    // Calculate totals
    const totals = await db.ledgerTransaction.groupBy({
      by: ["transactionType"],
      where: {
        ...where,
        status: "COMPLETED",
      },
      _sum: { amount: true },
      _count: true,
    });

    // Format transactions
    const formattedTransactions = transactions.map(formatTransaction);

    return NextResponse.json({
      transactions: formattedTransactions,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: offset + limit < totalCount,
      },
      totals: totals.reduce((acc, t) => {
        acc[t.transactionType] = {
          totalAmount: t._sum.amount || 0,
          count: t._count,
          totalAmountFormatted: ((t._sum.amount || 0) / 100).toFixed(2),
        };
        return acc;
      }, {} as Record<string, any>),
    });
  } catch (error) {
    console.error("Transaction fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch transactions" },
      { status: 500 }
    );
  }
}

// GET /api/transactions/[ref] - Get specific transaction details
export async function getTransactionDetails(ref: string) {
  try {
    const transaction = await db.ledgerTransaction.findUnique({
      where: { transactionRef: ref },
      include: {
        ledgerEntries: true,
      },
    });

    if (!transaction) {
      return null;
    }

    return formatTransaction(transaction);
  } catch (error) {
    console.error("Transaction detail fetch error:", error);
    return null;
  }
}

function formatTransaction(tx: any) {
  const isCredit = !!tx.receiverWalletId && !tx.senderWalletId;
  
  return {
    id: tx.id,
    transactionRef: tx.transactionRef,
    amount: tx.amount,
    amountFormatted: (tx.amount / 100).toFixed(2),
    currencyCode: tx.currencyCode,
    transactionType: tx.transactionType,
    description: tx.description,
    status: tx.status,
    completedAt: tx.completedAt,
    createdAt: tx.createdAt,
    direction: isCredit ? "received" : "sent",
    entries: tx.ledgerEntries?.map((entry: any) => ({
      id: entry.id,
      entryType: entry.entryType,
      amount: entry.amount,
      runningBalance: entry.runningBalance,
      createdAt: entry.createdAt,
    })),
  };
}
