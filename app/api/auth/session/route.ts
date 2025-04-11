import { NextRequest, NextResponse } from "next/server";
import {
	FBvalidateToken,
	FBcreateSessionCookie,
	FBinvalidateRefreshToken,
} from "@/actions/server/S_auth_actions";
import { createCookie, deleteCookie } from "@/actions/server/S_helper_fn";

type Tdata = {
	uid: string;
	token: string;
};

export async function POST(request: NextRequest): Promise<NextResponse> {
	const data: Tdata = await request.json();
	const token = data.token;
	const uid = data.uid;

	try {
		// verify the user token to verify user
		const isValid = await FBvalidateToken(token);
		if (isValid.success) {
			// if verified create a firebase cookie
			const firebaseSessionCookie = await FBcreateSessionCookie(token);
			if (firebaseSessionCookie.success && firebaseSessionCookie.data) {
				// if firebase cookie is created successfully create a nextjs cookie to be sent to client
				const cookieCreated = await createCookie(
					firebaseSessionCookie.data
				);
				if (cookieCreated) {
					// if nextjs cookie is created invalidate users refresh token
					// this will prevent firebase auth from auto refreshing the client idToken
					FBinvalidateRefreshToken(uid);
					// if success return a response to the client with the user information
					return NextResponse.json(
						{
							success: true,
							message: "session created",
							data: isValid.data?.uid,
						},
						{ status: 200 }
					);
				} else {
					// if nextjs cookie creation fails return a failed response
					return NextResponse.json(
						{
							success: false,
							message: "failed to create session",
							data: undefined,
						},
						{ status: 500 }
					);
				}
			} else {
				// if firebase cookie creation fails return an error
				return NextResponse.json(
					{
						success: false,
						message: "failed to create fb cookie",
						data: undefined,
					},
					{ status: 500 }
				);
			}

			// if token is not valid return an error
		} else {
			return NextResponse.json(
				{ success: false, message: "invalid token", data: undefined },
				{ status: 401 }
			);
		}
		// something went wrong return an error
	} catch (e) {
		return NextResponse.json(
			{ success: false, message: "invalid token", data: undefined },
			{ status: 400 }
		);
	}
}


export async function GET():Promise<NextResponse>{
	try {
		await deleteCookie()
		return NextResponse.json({status:200})
	}catch(e){
		return NextResponse.json({status:503})
	}
}