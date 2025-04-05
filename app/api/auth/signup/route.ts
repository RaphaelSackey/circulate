import { type NextRequest, NextResponse } from "next/server";
import { serverActionSignup } from "@/actions/server/auth/auth_actions";
import { TsignUp } from "@/types/form/formdata";

export async function POST(request: NextRequest) {
	const data: TsignUp = await request.json();
	try {
		const response = await serverActionSignup (data);
		return new Response(JSON.stringify(response), { status: 200 });
        
	} catch (e) {
        return new Response(JSON.stringify({ error: e }), { status: 500 });
	}
}
