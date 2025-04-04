import { TsignUp } from "@/types/form/formdata";

export const clientActionSignup = async(data:TsignUp ) =>{

    const response = await fetch('/api/auth/signup', {
        method: 'POST', // Specify the request method
        headers: {
            'Content-Type': 'application/json', // Indicate that you're sending JSON data
        },
        body: JSON.stringify(data),
    })
    return response
}