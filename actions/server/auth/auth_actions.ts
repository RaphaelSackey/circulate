import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../services/server/firebase/initialize.js"
import { TsignUp } from "@/types/form/formdata";

export const serverActionSignup = async (data:TsignUp) => {
    // testing this service
    const email = data.email
    const password = data.password
    
    if (password && email){
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            return userCredential;
        
        }catch(e){
            console.log(e)
            return e
            
        }
    }
}


