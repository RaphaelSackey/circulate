import { cookies } from "next/headers";

export async function createCookie(firebaseSessionCookie: string) {
	try {
		const cookieStore = await cookies();
		cookieStore.set({
			name: "sessionCookie",
			value: firebaseSessionCookie,
			httpOnly: true,
			path: "/",
		});
		return true;
	} catch (e) {
		return false;
	}
}
