import {NextFunction , Request, Response} from "express";
import { SmsOTPService } from "../services/smsOTP.service";

export default class SmsOTPController {
    private readonly service: SmsOTPService

    constructor() {
        this.service = new SmsOTPService()
    }

    public createSmsCodeForOTPHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const verificationRequest = await this.service.createCodeForOTP(req.body)
            if (verificationRequest.status === "pending") {
                return res.status(200).json({
                    message: 'success',
                    data: verificationRequest
                })
            }
            throw new Error("Oups, Something went wrong !")
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public checkSmsCodeForOTPHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const verificationChecks = await this.service.checkSmsCodeForOTP(req.body)
            if (verificationChecks.status === "approved") {
                return res.status(200).json({
                    message: 'success',
                    data: verificationChecks
                })
            }else{
                return res.status(400).json({
                    message: 'Code incorrect',
                    data: verificationChecks
                })
            }
        } catch (e) {
            next(new Error(e.message))
        }
    }
}