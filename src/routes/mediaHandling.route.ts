import {Router} from "express";
import { MediaHandlingController } from "../controllers/mediaHandling.controller";
import { MediaHandlingService } from "../services/mediaHandling.service";

const service = new MediaHandlingService()
const controller = new MediaHandlingController()
const mediaHandlingRoutes = Router()

mediaHandlingRoutes.post('/pictures/create', service.uploadPicture("picture", false), controller.FileUploadHandler)
mediaHandlingRoutes.post('/pictures/createMany', service.uploadPicture("picture", true), controller.FileUploadHandler) 
mediaHandlingRoutes.post('/documents/create', service.uploadDocument("document", false) ,controller.FileUploadHandler)
mediaHandlingRoutes.post('/documents/createMany', service.uploadDocument("document", true) ,controller.FileUploadHandler)
mediaHandlingRoutes.post('/documents/create-from-b64', controller.uploadBase64StringDocumentHandler)
mediaHandlingRoutes.post('/pictures/create-from-b64', controller.uploadBase64StringImageHandler)
mediaHandlingRoutes.post('/pictures/write-from-b64', controller.writeBase64StringImageHandler)

export default mediaHandlingRoutes