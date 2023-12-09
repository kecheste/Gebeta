import { db } from "@/utils/database";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  try {
    const { email, username, password } = await req.json();

    const existingUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (existingUsername) {
      return NextResponse(
        { user: null, message: "Username taken" },
        { status: 409 }
      );
    }

    const existingEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (existingEmail) {
      return NextResponse(
        { user: null, message: "Email taken" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { user: newUser, message: "New user created!" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
