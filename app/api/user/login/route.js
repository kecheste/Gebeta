import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/utils/auth";
import { db } from "@/utils/database";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    const user = await db.user.findFirst({ where: { username } });
    if (!user)
      return NextResponse.json(
        { error: "User not found with this username" },
        { status: 400 }
      );
    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
      return NextResponse.json(
        { error: "Password Incorrect" },
        { status: 400 }
      );
    }
    const token = await new SignJWT({
      username: username,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1m")
      .sign(getJwtSecretKey());
    const response = NextResponse.json(
      { success: true },
      { status: 200, headers: { "content-type": "application/json" } }
    );
    response.cookies.set({
      name: "token",
      value: token,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
