import { NextFunction, Request, Response } from "express";
import { AssuranceOffreBatimentService } from "../services/assuranceOffreBatiment.service";

export default class AssuranceOffreBatimentController {

    private readonly service: AssuranceOffreBatimentService

    constructor() {
        this.service = new AssuranceOffreBatimentService()
    }

    public loadAssuranceOffreBatimentHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assuranceOffreBatiment = await this.service.loadAssuranceOffreBatiment(req.params.id)
            return res.status(200).json({
                message: 'success',
                data: assuranceOffreBatiment
            })
        } catch (error) {
            next(new Error(error.message))
        }

    }

    public updateAssuranceOffreBatimentHandler = async (req: any, res: Response, next: NextFunction) => {
        try {
            const update = await this.service.updateAssuranceOffreBatiment(req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createAssuranceOffreBatimentHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assuranceOffreBatiment = await this.service.createAssuranceOffreBatiment(req.body)
            res.status(200).json({
                message: 'success',
                data: assuranceOffreBatiment
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadAllAssuranceOffreBatimentHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assuranceOffreBatiments = await this.service.loadAllAssuranceOffreBatiment()
            return res.status(200).json({
                message: 'success',
                data: assuranceOffreBatiments
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }
}