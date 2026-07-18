import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { syncDiscordUser } from "@/lib/auth/user-sync";
import { redirect } from "next/navigation";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  try {
    // Sync Discord user to local database
    await syncDiscordUser(
      session.user.discordId || "",
      session.user.email || "",
      session.user.name,
      session.user.image
    );

    // Redirect to main app after sync
    redirect("/");
  } catch (error) {
    console.error("Auth sync error:", error);
    redirect("/login?error=sync_failed");
  }
}
