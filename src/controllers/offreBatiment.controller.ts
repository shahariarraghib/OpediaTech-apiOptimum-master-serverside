import { NextFunction, Request, Response } from "express";
import { OffreBatimentService } from "../services/offreBatiment.service";

export default class OffreBatimentController {

    private readonly service: OffreBatimentService

    constructor() {
        this.service = new OffreBatimentService()
    }

    public loadOffreBatimentHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offreBatiment = await this.service.loadOffreBatiment(req.params.id)
            return res.status(200).json({
                message: 'success',
                data: offreBatiment
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createOffreBatimentHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offreBatiment = await this.service.createOffreBatiment(req.body)
            res.status(200).json({
                message: 'success',
                data: offreBatiment
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadAllOffreBatimentHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offreBatiment = await this.service.loadAllOffreBatiment()
            return res.status(200).json({
                message: 'success',
                data: offreBatiment
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public updateOffreBatimentHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const update = await this.service.updateOffreBatiment(req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }


}