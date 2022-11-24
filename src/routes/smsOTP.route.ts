import {Router} from "express";
import SmsOTPController from "../controllers/smsOTP.controller";

const smsOTPRoutes = Router()
const controller = new SmsOTPController()

smsOTPRoutes.post('/create', controller.createSmsCodeForOTPHandler)
smsOTPRoutes.post('/check', controller.checkSmsCodeForOTPHandler)

export default smsOTPRoutes