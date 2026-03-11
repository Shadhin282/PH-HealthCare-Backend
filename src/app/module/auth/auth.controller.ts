import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { AuthService } from "./auth.service";
import sendResponse from "../../shared/sendResponse";

const registerPatient = catchAsync(async(req: Request, res: Response)=> {
        const payload = req.body;

        const result = await AuthService.registerPatient(payload);

        sendResponse(res, {
            httpResponse: 201,
            success : true,
            message : "Patient Register Successfully",
            data : result 
        })
})


const loginUser = catchAsync(async(req: Request, res: Response)=>{

        const payload = req.body;
        const result = await AuthService.loginUser(payload);

        sendResponse(res, {
            httpResponse : 200,
            success : true,
            message: "Login successfully",
            data : result,
        })
})


export const AuthController = {
    registerPatient,
    loginUser
}