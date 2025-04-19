import {
	createUserWithEmailAndPassword,
	deleteUser,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../../services/client/C_firebase";
import {
	TsignUp,
	TsessionCookieResponse,
	TcheckSignIn,
	TlogIn,
	TrequestSessionData,
} from "@/types/C_types";

// request a cookie from the server
async function getSessionCookie(
	token: string,
	uid: string
): Promise<TsessionCookieResponse> {
	try {
		const response = await fetch("/api/auth/session", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				token: token,
				uid: uid,
			}),
		});
		const data: TrequestSessionData = await response.json();
		return { status: true, data };
	} catch (e) {
		return { status: false, e: "Server error" };
	}
}

// create new user
export const clientActionSignup = async (
	data: TsignUp
): Promise<TsessionCookieResponse> => {
	const email = data.email;
	const password = data.password;

	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const token = await userCredential.user.getIdToken();
		const uid = userCredential.user.uid;

		const isSignedup = await clientSignupOnServer(uid);

		if (!isSignedup.success) {
			const user = auth.currentUser;
			if (user) {
				await deleteUser(user);
			}
			return { status: false, e: "failed to sign up" };
		} else {
			return await getSessionCookie(token, uid);
		}
	} catch (e) {
		if (e instanceof FirebaseError) {
			const trimmedMessage = e.message
				.replace(/^Firebase:\s*/, "")
				.trim();
			return { status: false, e: trimmedMessage };
		} else {
			return { status: false, e };
		}
	}
};

// log in user
export async function clientLogin(
	data: TlogIn
): Promise<TsessionCookieResponse> {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			data.email,
			data.password
		);
		const token = await userCredential.user.getIdToken();
		const uid = userCredential.user.uid;

		return await getSessionCookie(token, uid);
	} catch (e) {
		if (e instanceof FirebaseError) {
			const trimmedMessage = e.message
				.replace(/^Firebase:\s*/, "")
				.trim();
			return { status: false, e: trimmedMessage };
		} else {
			return { status: false, e };
		}
	}
}

export async function checkSignin(): Promise<TcheckSignIn> {
	try {
		const response = await fetch("/api/auth/checksignedin", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});

		if (!response.ok) {
			throw new Error("user not logged in");
		}

		const uid = await response.json();
		return { status: true, uid };
	} catch (e) {
		throw e;
	}
}

export async function signOut(): Promise<{ status: boolean }> {
	try {
		const response = await fetch("/api/auth/session", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});

		if (!response.ok) {
			return { status: false };
		}

		return { status: true };
	} catch (e) {
		throw e;
	}
}

export async function clientSignupOnServer(
	uid: string
): Promise<{ success: boolean }> {
	try {
		const response = await fetch("/api/auth/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				uid: uid,
			}),
		});

		if (!response.ok) {
			return { success: false };
		}

		return { success: true };
	} catch (e) {
		return { success: false };
	}
}
