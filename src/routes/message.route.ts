import {Router} from "express";
import MessageController from "../controllers/message.controller";

const MessageRoutes = Router()
const controller = new MessageController()

MessageRoutes.post('/create', controller.createMessageHandler)
MessageRoutes.delete('/deletes/:send_hour', controller.deleteMessageHandler)
MessageRoutes.get('/get/:send_hour', controller.loadMessageHandler)
MessageRoutes.get('/load/:receiver', controller.loadMessageUserHandler)
MessageRoutes.get('/getAll', controller.loadAllMessageHandler)

export default MessageRoutes
