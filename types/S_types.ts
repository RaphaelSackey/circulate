import { DecodedIdToken} from 'firebase-admin/auth';

export type TvalidateToken = {
    success: boolean,
    data?: DecodedIdToken,
}


export type TsessionCookie = {
    success: boolean,
    data?: string,
}

export type TaddItmes = {
	name: string,
	description: string,
    category: string[]
    communityId?: string,
    imageUrl: string[],
    latitude: number,
    longitude: number,
    ownerId: string
    
}

export type TgetItems = {
    longitude: number,
    latitude: number,
    batch: string,
    searchQuery: string
}


