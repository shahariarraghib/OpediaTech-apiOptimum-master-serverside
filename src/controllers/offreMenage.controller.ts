import { NextFunction, Request, Response } from "express";
import { OffreMenageService } from "../services/offreMenage.service";



export default class OffreMenageController {

    private readonly service: OffreMenageService

    constructor() {
        this.service = new OffreMenageService()
    }

    public loadOffreMenageHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offreMenage = await this.service.loadOffreMenage(req.params.id)
            return res.status(200).json({
                message: 'success',
                data: offreMenage
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createOffreMenageHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offreMenage = await this.service.createOffreMenage(req.body)
            res.status(200).json({
                message: 'success',
                data: offreMenage
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadAllOffreMenageHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offreMenage = await this.service.loadAllOffreMenage()
            return res.status(200).json({
                message: 'success',
                data: offreMenage
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public updateOffreMenageHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const update = await this.service.updateOffreMenage(req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }


}