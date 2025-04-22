import { NextRequest, NextResponse } from "next/server";
import { FBvalidateSessionCookie } from "@/actions/server/S_auth_actions";

import { cookies } from "next/headers";
export async function POST(
	request: NextRequest,
	{ params }: { params: Promise<{ batch: string }> }
) {
	const info = await request.json();
	const batch = (await params).batch

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

    console.log(info)
    console.log(batch)
	// logic for getting the items by the distance
}
