import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { FBvalidateSessionCookie } from "@/actions/server/S_auth_actions";

export async function GET(request: NextRequest): Promise<NextResponse> {
	const cookieStore = await cookies();
	const token = cookieStore.get("sessionCookie")?.value;

	if (!token) {
		return NextResponse.json("", { status: 401 });
	}

	const isValid = await FBvalidateSessionCookie(token)
	if (!isValid.success) {
		return NextResponse.json("", { status: 401 });
	}

	const uid = isValid.data?.uid;
	return NextResponse.json(uid, { status: 200 });
}
