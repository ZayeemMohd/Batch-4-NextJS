import { TodoModel } from "@/lib/db";
import { headers } from 'next/headers'
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(req) {

    const token = await req.headers.get("token");

    console.log(token);
    
    const decoded = jwt.verify(token, "secret2123");
    
    console.log(decoded);

  const dbRes = await TodoModel.find({
    username: decoded
  });

  return NextResponse.json({
    msg: "request recieved on next.js server",
    todos: dbRes,
  });
}
