import {Router} from "express";
import SendMailController from "../controllers/sendMail.controller";

const sendMailRoutes = Router()
const controller = new SendMailController()

sendMailRoutes.post('/welcome', controller.createWelcomeMailMsgHandler)
sendMailRoutes.post('/password-reset-successfully', controller.sendMailInfoPasswordResetHandler)

export default sendMailRoutes