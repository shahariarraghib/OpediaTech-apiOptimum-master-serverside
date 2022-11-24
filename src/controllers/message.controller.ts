import { NextFunction, Request, Response } from "express";
import AuthenticatedUser from "../interfaces/authenticatedUser";
import { MessageService } from "../services/message.service";



export default class MessageController {

    private readonly service: MessageService

    constructor() {
        this.service = new MessageService()
    }

    public loadMessageHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {
            const message = await this.service.loadMessage(req.user.id, req.params.send_hour)
            return res.status(200).json({
                message: 'success',
                data: message
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }
    public loadMessageUserHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {

            console.log(req.params.receiver);
            console.log(req.user.id);
            
            const messageUser = await this.service.loadMessageUser(req.user.id, req.params.receiver)

            return res.status(200).json({
                message: 'success',
                data: messageUser,
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createMessageHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {            
            const message = await this.service.createMessage(req.user.id, req.body)
            res.status(200).json({
                message: 'success',
                data: message
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadAllMessageHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const Message = await this.service.loadAllMessage()
            return res.status(200).json({
                message: 'success',
                data: Message
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public deleteMessageHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {
            const deleted = await this.service.deleteMessage(req.user.id, req.params.send_hour)
            return res.status(200).json({
                message: 'success',
                data: deleted
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }


}
