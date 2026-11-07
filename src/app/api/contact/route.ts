import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(),
  type: z.enum(["newsletter", "demo", "contact"]).default("newsletter"),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.APPS_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("APPS_SCRIPT_URL not configured");
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    const { email, name, type, message } = result.data;

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name: name || "",
        type,
        message: message || "",
        timestamp: new Date().toISOString(),
      }),
      redirect: "follow",
    });

    if (!res.ok) throw new Error(`Apps Script responded ${res.status}`);

    return NextResponse.json(
      {
        message:
          type === "newsletter"
            ? "You are subscribed. Check your inbox for confirmation."
            : "Thank you. We will reply within 24 hours.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
