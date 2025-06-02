export type TlogIn = {
	email: string;
	password: string;
};

export type TsignUp = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
};

type TsessionResponseData = {
	success: boolean;
	message: string;
	data: string;
};

export type TsessionCookieResponse =
	| { status: true; data: TsessionResponseData }
	| { status: false; e: unknown };


export type TcheckSignIn ={
	status: boolean,
	uid: string,
}

export type TrequestSessionData ={
	success: boolean, 
	message: string, 
	data: string,
}

export type TitemCard = {
	imgUrl: string,
	name: string,
	description: string,
	distance: string,
	status: 'Available' | 'Unavailable'
}

export type TitemCategoryLabel =
	| "Electronics"
	| "Tools"
	| "Education"
	| "Appliances"
	| "Sports & Fitness"
	| "Clothing & Wearables"
	| "Home & Furniture"
	| "Books & Media"
	| "Outdoor & Garden"
	| "Toys & Games"
	| "Art & Crafts"
	| "Musical Instruments"
	| "Bikes & Mobility";


export type TaddItmes = {
	name: string,
	description: string,
	location: [string?,string?]
	category: string[]
}
export type TaddItmesfnArg = {
	data: TaddItmes,
	images: string[]
}



export type TaddItmesFnReturn = {
	success: boolean,
	message: string
}

export type TitemsByCurrentLocation = {
	longitude: number,
	latitude: number,
	searchQuery: string
}


type TitemsNearby = {
		id: string,
		name: string,
		imageUrl: string[],
		description: string,
		distance: number
}

export type TgetItemsFnReturn = {
	success: boolean, 
	itemsNearby: TitemsNearby[] , 
	nextBatch: any
}