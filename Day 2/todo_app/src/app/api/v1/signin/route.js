import { UserModel } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = "secret2123";

export async function POST(req) {
  const { username, password } = await  req.json();

  const userProfile = await UserModel.findOne({ username });

  if (!userProfile) {
    return NextResponse.json(
      {
        msg: "Invalid username or password",
      },
      { status: 401 }
    );
  }

  console.log(userProfile);

  const isOkay = await bcrypt.compare(password, userProfile.password);

  if (!isOkay) {
    return NextResponse.json(
      {
        msg: "Invalid username or password",
      },
      { status: 401 }
    );
  }

  const token = jwt.sign(username, JWT_SECRET);

  return NextResponse.json(
    {
      msg: "Logged in successfully",
      token,
    },
    { status: 200 }
  );
}
