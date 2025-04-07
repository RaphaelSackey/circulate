import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../services/client/firebase/initialize"
import { TsignUp } from "@/types/form/formdata";

async function getSessionCookie(token:string, uid: string){
	try{
		const response = await fetch('/api/auth/session',{
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify({
				token: token,
				uid: uid
			})
		})
		const data = await response.json()
		return  {status: false, data}
	}catch (e){
		console.log(e)
		return {status: false}
	}
	
}


export const clientActionSignup = async (data:TsignUp) => {

	const email = data.email
	const password = data.password
	
	if (password && email){
		try{
			const userCredential = await createUserWithEmailAndPassword(auth, email, password)
			const token = await userCredential.user.getIdToken()
			const uid =  userCredential.user.uid

			return await getSessionCookie(token, uid )
		
		}catch(e){
			console.log(e)	
		
		}
	}
}


