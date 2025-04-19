import { NextRequest, NextResponse } from "next/server";
import { PGaddNewUser } from "@/actions/server/S_auth_actions";

type Tdata = {
	uid: string;
};
export async function POST(request: NextRequest) {
	const data: Tdata = await request.json();
	const uid = data.uid;

	const isSignedIn = await PGaddNewUser(uid);

	if (!isSignedIn) {
		return NextResponse.json({ success: false }, { status: 401 });
	}

	return NextResponse.json({ success: true }, { status: 200 });
}
