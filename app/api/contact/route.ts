import { type NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    if (!name || !email || !interest || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await appendToSheet({ name, email, phone, interest, message });

    return NextResponse.json({ message: "Submission successful!" }, { status: 200 });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
