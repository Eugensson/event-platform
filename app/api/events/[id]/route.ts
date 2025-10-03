import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

import { Event } from "@/types";

interface AsyncParams {
  id: string;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<AsyncParams> }
) {
  const { id } = await params;

  try {
    const filePath = path.join(process.cwd(), "db.json");
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContents) as { events: Event[] };

    const event = data.events.find((e) => e.id === id);

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(event, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch event" },
      { status: 500 }
    );
  }
}
