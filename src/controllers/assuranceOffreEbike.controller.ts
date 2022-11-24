import { NextFunction, Request, Response } from "express";
import { AssuranceOffreEbikeService } from "../services/assuranceOffreEbike.service";


export default class AssuranceOffreEbikeController {
    private readonly service: AssuranceOffreEbikeService

    constructor() {
        this.service = new AssuranceOffreEbikeService()
    }

    public loadAssuranceOffreEbikeHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const assuranceOffreEbike = await this.service.loadAssuranceOffreEbike(req.params.id)
            return res.status(200).json({
                message: 'success',
                data: assuranceOffreEbike
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadAllAssuranceOffreEbikeHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const assuranceOffreEbikeList = await this.service.loadAllAssuranceOffreEbike()
            return res.status(200).json({
                message: 'success',
                data: assuranceOffreEbikeList
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public updateAssuranceOffreEbikeHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const update = await this.service.updateAssuranceOffreEbike(req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createAssuranceOffreEbikeHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const assuranceOffreEbike = await this.service.createAssuranceOffreEbike(req.body)
            res.status(200).json({
                message: 'success',
                data: assuranceOffreEbike
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }
}