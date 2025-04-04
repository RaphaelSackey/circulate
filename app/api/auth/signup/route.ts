import { type NextRequest, NextResponse } from "next/server";
import { serverActionSignup } from "@/actions/server/auth/auth_actions";
import { TsignUp } from "@/types/form/formdata";

export async function POST(request: NextRequest) {
	// Testing route
	const data: TsignUp = await request.json();
	try {
		const response = await serverActionSignup (data);
		console.log(response)
		return new Response(JSON.stringify(response), { status: 200 });
        
	} catch (e) {
		console.log("Error during signup:", e);
        return new Response(JSON.stringify({ error: "Signup failed" }), { status: 500 });
	}
}
