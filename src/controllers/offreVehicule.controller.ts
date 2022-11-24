import { NextFunction, Request, Response } from "express";
import { OffreVehiculeService } from "../services/offreVehicule.service";



export default class OffreVehiculeController {

    private readonly service: OffreVehiculeService

    constructor() {
        this.service = new OffreVehiculeService()
    }

    public loadOffreVehiculeHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offreVehicule = await this.service.loadOffreVehicule(req.params.id)
            return res.status(200).json({
                message: 'success',
                data: offreVehicule
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createOffreVehiculeHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offreVehicule = await this.service.createOffreVehicule(req.body)
            res.status(200).json({
                message: 'success',
                data: offreVehicule
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadAllOffreVehiculeHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const offreVehicule = await this.service.loadAllOffreVehicule()
            return res.status(200).json({
                message: 'success',
                data: offreVehicule
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public updateOffreVehiculeHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const update = await this.service.updateOffreVehicule(req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }


}