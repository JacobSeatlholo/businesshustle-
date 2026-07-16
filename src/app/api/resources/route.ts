import { NextRequest, NextResponse } from "next/server";
import resources from "@/data/resources.json";

type Resource = {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
  isFree: boolean;
  isPaid: boolean;
  order: number;
};

const ALL = resources as Resource[];
const CATEGORIES = [...new Set(ALL.map((r) => r.category))].sort();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = (searchParams.get("search") || "").toLowerCase();
    const category = searchParams.get("category") || "";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "200");

    let filtered = ALL;
    if (search) {
      filtered = filtered.filter(
        (r) =>
          r.name.toLowerCase().includes(search) ||
          r.description.toLowerCase().includes(search) ||
          r.category.toLowerCase().includes(search)
      );
    }
    if (category) {
      filtered = filtered.filter((r) => r.category === category);
    }

    const total = filtered.length;
    const start = (page - 1) * limit;
    const paged = filtered.slice(start, start + limit);

    return NextResponse.json({
      resources: paged,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      categories: CATEGORIES,
    });
  } catch (error) {
    console.error("Resources fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch resources" },
      { status: 500 }
    );
  }
}
