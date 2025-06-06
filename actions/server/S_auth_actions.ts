import { adminAuth } from "@/services/server/S_firebase";
import { TvalidateToken, TsessionCookie } from "@/types/S_types";
import { prisma } from "@/services/server/S_postgress";

export async function FBvalidateToken(token: string): Promise<TvalidateToken> {
	try {
		const isValid = await adminAuth.verifyIdToken(token);
		return { success: true, data: isValid };
	} catch (e) {
		return { success: false };
	}
}

export async function FBcreateSessionCookie(
	token: string
): Promise<TsessionCookie> {
	const numberOfMinutes = Number(process.env.COOKIE_DURATION);
	try {
		const SessionCookie = await adminAuth.createSessionCookie(token, {
			expiresIn: numberOfMinutes * 60 * 1000,
		});
		return { success: true, data: SessionCookie };
	} catch (e) {
		return { success: false };
	}
}

export async function FBinvalidateRefreshToken(uid: string): Promise<void> {
	try {
		await adminAuth.revokeRefreshTokens(uid);
	} catch (e) {
		console.log(`failed to invalidate Token for ${uid} ${e}`);
	}
}
export async function FBvalidateSessionCookie(
	Cookie: string
): Promise<TvalidateToken> {
	try {
		const isValid = await adminAuth.verifySessionCookie(Cookie);
		return { success: true, data: isValid };
	} catch (e) {
		return { success: false };
	}
}

export async function PGaddNewUser(id: string): Promise<boolean> {
	try {
		const user = await prisma.user.create({
			data: {
				uid: id,
			},
		});

		return true;
	} catch (e) {
		console.log(e)
		return false;
	}
}
