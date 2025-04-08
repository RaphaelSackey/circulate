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

export type TsessionCookieResponse =
	| { status: true; data: any }
	| { status: false; e: unknown };

export type TsignupResponse =
	| { status: true; data: any }
	| { status: false; e: unknown }