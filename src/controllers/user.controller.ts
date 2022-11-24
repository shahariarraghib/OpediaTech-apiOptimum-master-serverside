import {UserService} from "../services/user.service";
import AuthenticatedUser from "../interfaces/authenticatedUser";
import {NextFunction , Request, Response} from "express";

export default class UserController {
    private readonly service: UserService

    constructor() {
        this.service = new UserService()
    }

    public loadUserHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {            
            const user = await this.service.loadUser(req.user)
            return res.status(200).json({
                message: 'success',
                data: user
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public loadAllUserHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {            
            const user = await this.service.loadUserAll()
            return res.status(200).json({
                message: 'success',
                data: user
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public loadUserByTypeHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {            
            const user = await this.service.loadUserByType(req.params.type)
            return res.status(200).json({
                message: 'success',
                data: user
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public updateUserHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {
            const update = await this.service.updateUser(req.user, req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }


    public updateProfilePhotoHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {
            const update = await this.service.updateProfilePhoto(req.user, req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }
}