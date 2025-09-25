import { NextRequest, NextResponse } from "next/server";
import { PGaddNewUser } from "@/actions/server/S_auth_actions";

type Tdata = {
	uid: string;
	firstName: string;
	lastName: string
};
export async function POST(request: NextRequest) {
	const data: Tdata = await request.json();
	const uid = data.uid;
	const firstName = data.firstName
	const lastName = data.lastName

	const isSignedIn = await PGaddNewUser(uid, firstName, lastName);

	if (!isSignedIn) {
		return NextResponse.json({ success: false }, { status: 401 });
	}

	return NextResponse.json({ success: true }, { status: 200 });
}
