import { TsignUp } from "@/types/C_types";

export function validateSigninForm(data: TsignUp) {
	// check if passwords match
	if (data.password !== data.confirmPassword) {
		return false;
	}
	return true;
}
