import {Router} from "express";
import PasswordResetController from "../controllers/passcode.controller";

const passwordResetRoutes = Router()
const controller = new PasswordResetController()

passwordResetRoutes.post('/get-passcode', controller.getPasscodeForPasswordRecover)

export default passwordResetRoutes