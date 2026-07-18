// Hustle Agent bot bridge — authenticated via BOT_API_KEY (Railway env)
// GET  /api/bot?discordId=...          -> user profile + wallet
// POST /api/bot { action, discordId, amount?, reason? }
//      action: "credit" | "debit"     -> adjust wallet, write ledger row
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

function authorized(req: NextRequest) {
  const key = req.headers.get("x-bot-api-key");
  return !!process.env.BOT_API_KEY && key === process.env.BOT_API_KEY;
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const discordId = req.nextUrl.searchParams.get("discordId");
  if (!discordId) return NextResponse.json({ error: "discordId required" }, { status: 400 });

  const user = await db.user.findUnique({
    where: { discordId },
    select: {
      id: true, discordId: true, displayName: true, name: true,
      level: true, experiencePoints: true, reputationScore: true,
      wallet: { select: { balance: true, currencyCode: true } },
    },
  });
  if (!user) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json({ user });
}

export async function POST(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => null);
  const { action, discordId, amount, reason } = body ?? {};
  if (!discordId || !["credit", "debit"].includes(action) || !Number.isInteger(amount) || amount <= 0) {
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }

  const user = await db.user.findUnique({ where: { discordId }, include: { wallet: true } });
  if (!user?.wallet) return NextResponse.json({ error: "user/wallet not found" }, { status: 404 });

  const delta = action === "credit" ? amount : -amount;
  if (user.wallet.balance + delta < 0) {
    return NextResponse.json({ error: "insufficient balance" }, { status: 409 });
  }

  const wallet = await db.wallet.update({
    where: { userId: user.id },
    data: {
      balance: { increment: delta },
      ...(action === "credit"
        ? { totalEarned: { increment: amount } }
        : { totalSpent: { increment: amount } }),
    },
  });

  return NextResponse.json({
    ok: true,
    discordId,
    action,
    amount,
    reason: reason ?? null,
    balance: wallet.balance,
  });
}
