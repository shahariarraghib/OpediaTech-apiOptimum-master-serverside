import AuthenticationService from "../services/authentication.service";
import { NextFunction, Request, Response } from "express"

export default class AuthenticationController {
    private readonly service: AuthenticationService

    constructor() {
        this.service = new AuthenticationService()
    }

    public registrationHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const registration = await this.service.registration(req.body)
            return res.status(201).json({
                message: 'user created',
                data: registration
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public loginRegistrationHandler = async (req: Request, res: Response) => {
        try {
            const login = await this.service.login(req.body)
            return res.status(201).json({
                message: 'success',
                token: login
            })
        } catch (e) {
            return res.status(404).json({
                message: e.message
            })
        }
    }


    public updatePasswordHandler = async (req: any, res: Response, next: NextFunction) => {
        try {
            const updatePassword = await this.service.updatePassword(req.user, req.body)
            return res.status(200).json(updatePassword)
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public getUserByPhoneNoHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.service.getUserByPhoneNo(req.params.telUser)
            return res.status(200).json({
                message: 'success',
                data: user
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public getUserByEmailHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.service.findUserByEmail(req.params.emailUser)
            return res.status(200).json({
                message: 'success',
                data: user
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public verifyPasscodeHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const verifyPasscode = await this.service.verifyPasscode(req.body)
            return res.status(201).json({
                message: 'success',
                token: verifyPasscode
            });
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public setNewPasswordHandler = async (req: any, res: Response, next: NextFunction) => {
        try {
            const setNewPassword = await this.service.setNewPassword(req.user, req.body)
            return res.status(201).json({
                message: 'success',
                data: setNewPassword
            });
        } catch (e) {
            next(new Error(e.message))
        }
    }
}

