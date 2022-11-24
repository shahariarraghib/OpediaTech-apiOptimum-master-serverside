import { NextFunction, Request, Response } from "express";
import { MediaHandlingService } from "../services/mediaHandling.service";


export class MediaHandlingController {
    private readonly service: MediaHandlingService

    constructor() {
        this.service = new MediaHandlingService()
    }

    public uploadDocumentHandler = (req: any, res: Response) => {
        const uploadDocument = this.service.uploadDocument("document", false)
        console.log(req.file)

        uploadDocument(req, res, function (err) {
            console.log(req.file)
            if (err) {
                console.log(err.message)
                return res.end("Error uploading file. Details : " + err.message);
            }
            res.end("File is uploaded");
        });
    }

    public uploadMultipleDocumentHandler = (req: any, res: Response) => {
        const uploadDocument = this.service.uploadDocument("document", true)
        console.log(req.file)

        uploadDocument(req, res, function (err) {
            console.log(req.file)
            if (err) {
                console.log(err.message)
                return res.end("Error uploading file. Details : " + err.message);
            }
            res.end("File is uploaded");
        });
    }

    public uploadPictureHandler = (req: any, res: Response) => {
        const uploadPicture = this.service.uploadPicture("picture", false)

        uploadPicture(req, res, function (err) {
            console.log(req.file)

            if (err) {
                return res.end("Error uploading file. Details : " + err.message);
            }

            return res.end("File is uploaded");
        });
    }

    public uploadMultiplePictureHandler = (req: any, res: Response) => {
        const uploadPicture = this.service.uploadPicture("picture", true)

        uploadPicture(req, res, function (err) {
            console.log(req.file)

            if (err) {
                return res.end("Error uploading file. Details : " + err.message);
            }

            return res.end("File is uploaded");
        });
    }

    public FileUploadHandler = (req: any, res: Response) => {
        console.log('There');

        if (req.file) {
            return res.status(201).json(req.file)
        }
        if (req.files) {
            return res.status(201).json(req.files)
        }
        return res.json({ message: 'No file found in the request!' })
    }

    public uploadBase64StringDocumentHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const documentUpladedPath = await this.service.uploadBase64StringDocument(req.body);
            console.log("documentUpladedPath : " + documentUpladedPath);
            
            return res.status(200).json({
                message: 'success',
                data: documentUpladedPath
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public uploadBase64StringImageHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const imageUpladedPath = await this.service.uploadBase64StringImage(req.body);
            console.log("imageUpladedPath : " + imageUpladedPath);
            
            return res.status(200).json({
                message: 'success',
                data: imageUpladedPath
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public writeBase64StringImageHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const imageUpladedPath = await this.service.writeBase64StringImage(req.body);
            console.log("imageUpladedPath : " + imageUpladedPath);
            
            return res.status(200).json({
                message: 'success',
                data: imageUpladedPath
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }
}