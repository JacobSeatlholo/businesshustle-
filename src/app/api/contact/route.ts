import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
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

    const { email, name, type, message } = result.data;

    // Check if email already exists for this type
    const existing = await db.contactSubmission.findFirst({
      where: { email, type },
    });

    if (existing) {
      return NextResponse.json(
        { message: "You're already subscribed!", alreadyExists: true },
        { status: 200 }
      );
    }

    // Create new submission
    const submission = await db.contactSubmission.create({
      data: { email, name, type, message },
    });

    return NextResponse.json(
      {
        message:
          type === "newsletter"
            ? "Welcome aboard! Check your inbox for confirmation."
            : "Thank you! We'll be in touch within 24 hours.",
        id: submission.id,
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