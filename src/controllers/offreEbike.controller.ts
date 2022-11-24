import { NextFunction, Request, Response } from "express";
import { OffreEbikeService } from "../services/offreEbike.service";



export default class OffreEbikeController {

    private readonly service: OffreEbikeService

    constructor() {
        this.service = new OffreEbikeService()
    }

    public loadOffreEbikeHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offreEbike = await this.service.loadOffreEbike(req.params.id)
            return res.status(200).json({
                message: 'success',
                data: offreEbike
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createOffreEbikeHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offreEbike = await this.service.createOffreEbike(req.body)
            res.status(200).json({
                message: 'success',
                data: offreEbike
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadAllOffreEbikeHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offreEbike = await this.service.loadAllOffreEbike()
            return res.status(200).json({
                message: 'success',
                data: offreEbike
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public updateOffreEbikeHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const update = await this.service.updateOffreEbike(req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }


}