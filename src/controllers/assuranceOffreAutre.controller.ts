import { NextFunction, Request, Response } from "express";
import { AssuranceOffreAutreService } from "../services/assuranceOffreAutre.service";



export default class AssuranceOffreAutreController {

    private readonly service: AssuranceOffreAutreService

    constructor() {
        this.service = new AssuranceOffreAutreService()
    }

    public loadAssuranceOffreAutreHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assuranceOffreAutre = await this.service.loadAssuranceOffreAutre(req.params.id)
            return res.status(200).json({
                message: 'success',
                data: assuranceOffreAutre
            })

        } catch (error) {
            next(new Error(error.message))
        }

    }

    public updateAssuranceOffreAutreHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const update = await this.service.updateAssuranceOffreAutre(req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createAssuranceOffreAutreHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assuranceOffreAutre = await this.service.createAssuranceOffreAutre(req.body)
            res.status(200).json({
                message: 'success',
                data: assuranceOffreAutre
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadAllAssuranceOffreAutreHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assuranceOffreAutres = await this.service.loadAllAssuranceOffreAutre()
            return res.status(200).json({
                message: 'success',
                data: assuranceOffreAutres
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }
}