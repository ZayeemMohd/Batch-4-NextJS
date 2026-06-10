import { UserModel } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const dbRes = await UserModel.find().select('-password');

  return NextResponse.json({
    msg: "users route",
    data: dbRes,
  });
}
