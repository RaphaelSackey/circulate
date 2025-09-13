import { NextRequest, NextResponse } from "next/server";
import { requestItem } from "@/actions/server/S_prismaData_actions";
import { cookies } from "next/headers";
import { FBvalidateSessionCookie } from "@/actions/server/S_auth_actions";

export async function POST(request: NextRequest){

const requestData = await request.json()
const itemId = Number(requestData.id)

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

    const successfulRequest = await requestItem(itemId, uid)

    if (successfulRequest){
return NextResponse.json({success: true}, {status:200})
    }
else{
    return NextResponse.json({success: false}, {status: 401})
}
}