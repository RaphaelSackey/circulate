import { TsignUp } from "@/types/form/formdata";

export const clientActionSignup = async(data:TsignUp ) =>{
    // Using fetch for  testing, Implement tanstack/react-query !!!
    
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data),
    })
    return response
}