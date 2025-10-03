import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

import { Event } from "@/types";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "db.json");
    const fileContents = fs.readFileSync(filePath, "utf-8");

    const data = JSON.parse(fileContents) as { events: Event[] };

    return NextResponse.json(data.events, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
