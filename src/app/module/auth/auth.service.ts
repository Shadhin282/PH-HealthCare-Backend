
import { USER_STATUS } from "../../../../generated/prisma/enums";
import { auth } from "../../lib/auth";

interface IRegisterPatient {
    name : string;
    email : string;
    password : string;
}

const registerPatient = async(payload : IRegisterPatient) => {
    const {name, email, password} = payload;

    const data = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            // role : USER_Role.PATIENT
        }
    })

    if(!data.user){
        throw new Error("Failed to Register Patient")
    }

    return data;
}

interface ILoginUser {
    email : string;
    password : string;
}
const loginUser = async(payload : ILoginUser)=>{
    
    const {email, password} = payload;

    const data = await auth.api.signInEmail({
        body : {
            email,
            password
        }
    })

    if(data.user.status === USER_STATUS.BLOCKED){
        throw new Error("User is blocked");
    }

    if(data.user.isDeleted || data.user.status === USER_STATUS.DELETED){
        throw new Error("User is Deleted");
    }

    return data
}

export const AuthService = {
    registerPatient,
    loginUser
}