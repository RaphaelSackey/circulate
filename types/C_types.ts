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
