import { cookies } from "next/headers";

export async function createCookie(
	firebaseSessionCookie: string
): Promise<boolean> {
	const duration = Number(process.env.COOKIE_DURATION)

	try {
		const cookieStore = await cookies();
		cookieStore.set({
			name: "sessionCookie",
			value: firebaseSessionCookie,
			httpOnly: true,
			path: "/",
			maxAge: 60 * duration,
			sameSite: 'lax'
		});
		return true;
	} catch (e) {
		return false;
	}
}


export async function deleteCookie(){
	(await cookies()).delete('sessionCookie')
}


