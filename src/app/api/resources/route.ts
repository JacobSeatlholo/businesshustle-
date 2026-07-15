import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "200");

    const where: Record<string, unknown> = {};

    if (search) {
      where.OR = [
        { name: { contains: search } },
        { description: { contains: search } },
        { category: { contains: search } },
      ];
    }

    if (category) {
      where.category = category;
    }

    const [resources, total, categories] = await Promise.all([
      db.resource.findMany({
        where,
        orderBy: [{ category: "asc" }, { order: "asc" }],
        skip: (page - 1) * limit,
        take: limit,
      }),
      db.resource.count({ where }),
      db.resource.findMany({
        distinct: ["category"],
        select: { category: true },
        orderBy: { category: "asc" },
      }),
    ]);

    return NextResponse.json({
      resources,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      categories: categories.map((c) => c.category),
    });
  } catch (error) {
    console.error("Resources fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch resources" },
      { status: 500 }
    );
  }
}