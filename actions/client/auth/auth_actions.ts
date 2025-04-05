import { TsignUp } from "@/types/form/formdata";

export const clientActionSignup = async (data: TsignUp) => {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		throw new Error("sign up failed");
	}
	try {
		const res_data = await response.json()
		return res_data
	} catch (e) {

		if (e instanceof Error) {
			throw new Error(e.message)
		}
	
		throw new Error("An unknown error occurred.")
	}
};
