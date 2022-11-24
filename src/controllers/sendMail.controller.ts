import {NextFunction , Request, Response} from "express";
import { SendMailService } from "../services/sendMail.service";

export default class SendMailController {
    private readonly service: SendMailService

    constructor() {
        this.service = new SendMailService()
    }

    public createWelcomeMailMsgHandler = async (req:Request, res:Response, next:NextFunction) => {
        try {
            const welcomeMail = await this.service.createWelcomeMailMsg(req.body)
            if (welcomeMail[0].statusCode == 202) {
                return res.status(200).json({
                    message: 'success',
                    data: welcomeMail
                })    
            }
            
        } catch (e) {
            console.log(e.message);
            next(new Error(e.message))
        }
    }

    public sendMailInfoPasswordResetHandler = async (req:Request, res:Response, next:NextFunction) => {
        try {
            const infoMail = await this.service.sendMailInfoPasswordReset(req.body)
            if (infoMail[0].statusCode == 202) {
                return res.status(200).json({
                    message: 'success',
                    data: infoMail
                })    
            }
        } catch (e) {
            console.log(e.message);
            next(new Error(e.message))
        }
    } 
}