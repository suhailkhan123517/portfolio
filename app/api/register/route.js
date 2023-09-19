import { connectMongodb } from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, lastName, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongodb();
    await User.create({ name, lastName, email, password: hashedPassword });

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while registering the user",
      },
      { status: 500 }
    );
  }
}
