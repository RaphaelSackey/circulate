import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../services/server/firebase/initialize.js"
import { TsignUp } from "@/types/form/formdata";

export const serverActionSignup = async (data:TsignUp) => {

    const email = data.email
    const password = data.password
    console.log('maiiilll', email)
    if (password && email){
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredential);
        
        }catch(e){
            console.log('im here')
            console.log(e)
        }
    }else{

    }
}


