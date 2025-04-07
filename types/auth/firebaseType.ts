import { DecodedIdToken} from 'firebase-admin/auth';

export type TvalidateToken = {
    success: boolean,
    data?: DecodedIdToken,
}


export type TsessionCookie = {
    success: boolean,
    data?: string,
}