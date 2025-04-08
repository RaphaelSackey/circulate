import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from 'firebase/app'
import { auth } from "../../../services/client/firebase/initialize";
import {
	TsignUp,
	TsessionCookieResponse,
	TsignupResponse,
} from "@/types/client/C_types";
import { Flashlight } from "lucide-react";

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
		const data = await response.json();
		return { status: true, data };
	} catch (e) {
		return { status: false, e:'Server error'};

	}
}


export const clientActionSignup = async (
	data: TsignUp
): Promise<TsignupResponse> => {
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

		return await getSessionCookie(token, uid);
	
	} catch (e) {
		if (e instanceof FirebaseError){
			const trimmedMessage = e.message.replace(/^Firebase:\s*/, '').trim()
			return {status: false, e:trimmedMessage}
		}else{
			return {status: false, e}
		}

	}
};
