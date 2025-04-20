import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    
    const {data, images} = await request.json()

    console.log({data})
    console.log({images})

    return NextResponse.json('', {status: 200})
  
}