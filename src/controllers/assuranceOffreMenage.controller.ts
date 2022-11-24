import { NextFunction, Request, Response } from "express";
import { AssuranceOffreMenageService } from "../services/assuranceOffreMenage.service";

export default class AssuranceOffreMenageController {
    private readonly service: AssuranceOffreMenageService

    constructor() {
        this.service = new AssuranceOffreMenageService()
    }

    public loadAssuranceOffreMenageHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const assuranceOffreMenage = await this.service.loadAssuranceOffreMenage(req.params.id)
            return res.status(200).json({
                message: 'success',
                data: assuranceOffreMenage
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadAllAssuranceOffreMenageHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const assuranceOffreMenageList = await this.service.loadAllAssuranceOffreMenage()
            return res.status(200).json({
                message: 'success',
                data: assuranceOffreMenageList
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public updateAssuranceOffreMenageHandler = async (req:Request, res:Response, next:NextFunction) => {
        try {
            const update = await this.service.updateAssuranceOffreMenage(req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createAssuranceOffreMenageHandler =async (req:Request, res:Response, next:NextFunction) => {
        try {
            const assuranceOffreMenage = await this.service.createAssuranceOffreMenage(req.body)
            res.status(200).json({
                message: 'success',
                data: assuranceOffreMenage
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }
}