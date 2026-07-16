import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  business: z.string().min(3).max(300),
  industry: z.string().max(100).optional(),
});

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Please describe your business (3–300 characters)." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY not configured");
      return NextResponse.json({ error: "Service temporarily unavailable." }, { status: 500 });
    }

    const { business, industry } = result.data;

    const prompt = `You are the AI strategist for Business Hustle, a Cape Town digital agency helping South African businesses adopt AI and automation.

A visitor describes their business: "${business}"${industry ? ` (industry: ${industry})` : ""}

Return ONLY valid JSON, no markdown fences, in this exact shape:
{"ideas":[{"title":"...","description":"...","impact":"..."},{"title":"...","description":"...","impact":"..."},{"title":"...","description":"...","impact":"..."}]}

Rules:
- 3 ideas, each a specific AI/automation opportunity for THIS business in the South African context
- title: max 8 words. description: 1-2 sentences, concrete and practical. impact: one short phrase like "Save 5+ hours/week" or "Reduce no-shows by 30%"
- Ideas must be realistically buildable by a small agency (chatbots, workflow automation, lead capture, WhatsApp integration, data dashboards, AI content) — no moonshots
- Plain language, no jargon`;

    const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.8, maxOutputTokens: 800 },
      }),
    });

    if (!res.ok) {
      console.error("Gemini error:", res.status, await res.text());
      return NextResponse.json({ error: "Idea generation failed. Please try again." }, { status: 502 });
    }

    const data = await res.json();
    const text: string =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    if (!Array.isArray(parsed?.ideas) || parsed.ideas.length === 0) throw new Error("bad shape");

    return NextResponse.json({ ideas: parsed.ideas.slice(0, 3) });
  } catch (error) {
    console.error("Ideas route error:", error);
    return NextResponse.json({ error: "Idea generation failed. Please try again." }, { status: 500 });
  }
}
