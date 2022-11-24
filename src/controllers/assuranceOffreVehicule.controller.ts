import { NextFunction, Request, Response } from "express";
import { AssuranceOffreVehiculeService } from "../services/assuranceOffreVehicule.service";


export default class AssuranceOffreVehiculeController {
    private readonly service: AssuranceOffreVehiculeService

    constructor() {
        this.service = new AssuranceOffreVehiculeService()
    }

    public loadAssuranceOffreVehiculeHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const assuranceOffreVehicule = await this.service.loadAssuranceOffreVehicule(req.params.id)
            return res.status(200).json({
                message: 'success',
                data: assuranceOffreVehicule
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadAllAssuranceOffreVehiculeHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const assuranceOffreVehiculeList = await this.service.loadAllAssuranceOffreVehicule()
            return res.status(200).json({
                message: 'success',
                data: assuranceOffreVehiculeList
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public updateAssuranceOffreVehiculeHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const update = await this.service.updateAssuranceOffreVehicule(req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createAssuranceOffreVehiculeHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const assuranceOffreVehicule = await this.service.createAssuranceOffreVehicule(req.body)
            res.status(200).json({
                message: 'success',
                data: assuranceOffreVehicule
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }
}