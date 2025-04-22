import { NextRequest, NextResponse } from "next/server";
import { FBvalidateSessionCookie } from "@/actions/server/S_auth_actions";
import { getItems } from "@/actions/server/S_prismaData_actions";

import { cookies } from "next/headers";
export async function POST(
	request: NextRequest,
	{ params }: { params: Promise<{ batch: string }> }
) {
	const info: {
		longitude: number;
		latitude: number;
		searchQuery: string;
	} = await request.json();
	const batch = (await params).batch;

	const cookieStore = await cookies();
	const token = cookieStore.get("sessionCookie")?.value;

	if (!token) {
		console.log("invalid token");
		return NextResponse.json("", { status: 401 });
	}

	const isValid = await FBvalidateSessionCookie(token);

	if (!isValid.success) {
		console.log("im breaking invalid token");
		return NextResponse.json("", { status: 401 });
	}

	// logic for getting the items by the distance
    try{
        const {success, itemsNearby, nextt} = await getItems({longitude:info.longitude, latitude:info.latitude, searchQuery:info.searchQuery, batch:batch} )
        let nextBatch = null
        if (nextt){
            nextBatch = {data:{longitude:info.longitude, latitude:info.latitude, searchQuery:info.searchQuery}, batch:nextt}
        }

        return NextResponse.json({success, itemsNearby, nextBatch},{status:200})

    }catch(e){
        return NextResponse.json({status:500})
    }
}
