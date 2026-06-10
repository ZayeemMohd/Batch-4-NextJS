import { UserModel } from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, username, password } = await req.json();


  const hashedPassword = await bcrypt.hash(password, 5);

  const dbResponse = await UserModel.create({
    username: username,
    email: email,
    password: hashedPassword,
  });

  return NextResponse.json({
    msg: "user registered successfully",
    details: dbResponse,
  });
}
