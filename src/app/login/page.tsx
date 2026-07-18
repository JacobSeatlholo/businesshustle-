"use client";

import { signIn, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Discord } from "@/components/ui/icons";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if already authenticated
    getSession().then((session) => {
      if (session) {
        router.push("/");
        router.refresh();
      }
    });
  }, [router]);

  const handleDiscordLogin = async () => {
    setLoading(true);
    try {
      await signIn("discord", { callbackUrl: "/api/auth/callback/sync" });
    } catch (error) {
      console.error("Sign in error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20">
        <CardHeader className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-purple-500/30">
              <span className="text-3xl font-bold text-white">BH</span>
            </div>
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold text-white">
              BusinessHustle
            </CardTitle>
            <CardDescription className="text-gray-300">
              Real-time social platform powered by Discord
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-sm text-gray-400 text-center">
            <p>Connect your Discord account to access:</p>
            <ul className="space-y-2">
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                Real-time chat rooms with gifting
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                Virtual economy & digital shop
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                Profile customization & badges
              </li>
            </ul>
          </div>

          <Button
            onClick={handleDiscordLogin}
            disabled={loading}
            className="w-full h-14 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25"
          >
            {loading ? (
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Connecting to Discord...
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Discord className="w-6 h-6" />
                Sign in with Discord
              </div>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By signing in, you agree to our Terms of Service and Privacy Policy.
            Your Discord identity will be linked to your BusinessHustle profile.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
