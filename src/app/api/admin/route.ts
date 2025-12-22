import { NextResponse } from "next/server";
import dotenv from 'dotenv';

dotenv.config();


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, password } = body;

    if (!name || !password) {
      return NextResponse.json(
        { message: "Missing credentials" },
        { status: 400 }
      );
    }

    const ADMIN_NAME = process.env.ADMIN_NAME;
    const ADMIN_PASS = process.env.ADMIN_PASS;

    if (!ADMIN_NAME || !ADMIN_PASS) {
      console.error("Admin credentials not set in env");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Strict comparison
    if (name !== ADMIN_NAME || password !== ADMIN_PASS) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ✅ Auth success
    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid request" },
      { status: 400 }
    );
  }
}
