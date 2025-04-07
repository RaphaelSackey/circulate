import { adminAuth } from "@/services/server/firebase/admine";
import { TvalidateToken,  TsessionCookie  } from "@/types/auth/firebaseType";


export async function FBvalidateToken(token: string):Promise<TvalidateToken> {
    try{
        const isValid = await adminAuth.verifyIdToken(token)
        return {success: true, data:isValid}
    }catch(e){
        return {success: false}
    }
}

export async function FBcreateSessionCookie(token: string): Promise<TsessionCookie> {
    const numberOfMinutes = 5
    try{
        const SessionCookie = await adminAuth.createSessionCookie(token, {
            expiresIn:  numberOfMinutes * 60 * 1000
        })
        return {success: true, data: SessionCookie}
    }catch(e){
        return {success: false}
    }
}

export async function FBinvalidateRefreshToken(uid: string) {
    try{
        await adminAuth.revokeRefreshTokens(uid)
    }catch(e){
        console.log(`failed to invalidate Token for ${uid} ${e}`)
    }
    
}






