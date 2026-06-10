import { TodoModel } from "@/lib/db";
import { NextResponse } from "next/server";

 export async function POST(req){

    

    const {description, title, isDone} = await req.json();

    const dbRes = await TodoModel.create({
       description,
       title,
       isDone
    })

    return NextResponse.json({
        "msg": "todo created successfully"
    })
}