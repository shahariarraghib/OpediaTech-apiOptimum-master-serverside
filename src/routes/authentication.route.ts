import {Router} from "express";
import AuthenticationController from "../controllers/authentication.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";

const controller = new AuthenticationController()
const authenticationRoutes = Router()

authenticationRoutes.post('/register', controller.registrationHandler)
authenticationRoutes.post('/login', controller.loginRegistrationHandler)
authenticationRoutes.put('/update-password', authenticationMiddleware, controller.updatePasswordHandler)

authenticationRoutes.get('/get-user-by-email/:emailUser', controller.getUserByEmailHandler)
authenticationRoutes.get('/get-user-by-phone/:telUser', controller.getUserByPhoneNoHandler)

authenticationRoutes.post('/verifyPasscode', controller.verifyPasscodeHandler)
authenticationRoutes.post('/set-new-password', authenticationMiddleware, controller.setNewPasswordHandler)

export default authenticationRoutes