import { db } from "@/lib/db";

interface DiscordProfile {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  email?: string;
}

export async function syncDiscordUser(
  discordId: string,
  email: string,
  name: string | null,
  avatarUrl: string | null
) {
  try {
    // Upsert user - create if not exists, update if does
    const user = await db.user.upsert({
      where: { discordId },
      update: {
        email,
        name,
        avatarUrl,
        lastSeenAt: new Date(),
        isOnline: true,
      },
      create: {
        discordId,
        email,
        name,
        avatarUrl,
        isOnline: true,
      },
    });

    // Ensure wallet exists for user
    await db.wallet.upsert({
      where: { userId: user.id },
      update: {},
      create: {
        userId: user.id,
        balance: 1000, // Starting bonus: 10.00 BHC (in cents)
        totalEarned: 1000,
      },
    });

    return user;
  } catch (error) {
    console.error("Error syncing Discord user:", error);
    throw error;
  }
}

export async function updateUserPresence(
  userId: string,
  isOnline: boolean
) {
  return db.user.update({
    where: { id: userId },
    data: {
      isOnline,
      lastSeenAt: new Date(),
    },
  });
}

export async function getUserByDiscordId(discordId: string) {
  return db.user.findUnique({
    where: { discordId },
    include: {
      wallet: true,
      inventory: {
        where: { isActive: true },
        include: { item: true },
      },
    },
  });
}
