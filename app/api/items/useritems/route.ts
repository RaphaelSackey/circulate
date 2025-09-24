import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { FBvalidateSessionCookie } from "@/actions/server/S_auth_actions";
import { getUserItems } from "@/actions/server/S_prismaData_actions";


export async function GET(response:NextResponse){
    const cookieStore = await cookies();
    const token = cookieStore.get("sessionCookie")?.value;

    if (!token) {
        console.log('invalid token')
        return NextResponse.json({success: false}, { status: 401 });
    }

    const isValid = await FBvalidateSessionCookie(token);
    if (!isValid.success) {
        console.log('im breaking invalid token')
        return NextResponse.json({success: false}, { status: 401 });
    }

    const uid: string= isValid.data?.uid as string

    try{
        const userItemsData = await getUserItems(uid)
        return NextResponse.json(userItemsData, { status: 200 })
    }catch(e){
        return NextResponse.json('', { status: 401 });
    }
    

}