import { NextFunction, Request, Response } from "express";
import AuthenticatedUser from "../interfaces/authenticatedUser";
import { ContratAssuranceService } from "../services/contratAssurance.service";



export default class ContratAssuranceController {

    private readonly service: ContratAssuranceService

    constructor() {
        this.service = new ContratAssuranceService()
    }

    public loadContratAssuranceHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {
            const contratAssurance = await this.service.loadContratAssurance(req.user.id, req.params.idPackAssur)
            return res.status(200).json({
                message: 'success',
                data: contratAssurance
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createContratAssuranceHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {
            const contratAssurance = await this.service.createContratAssurance(req.user.id , req.body)
            res.status(200).json({
                message: 'success',
                data: contratAssurance
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadAllContratAssuranceHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {
            const contratAssurance = await this.service.loadAllContratAssurance(req.user.id)
            return res.status(200).json({
                message: 'success',
                data: contratAssurance
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public updateContratAssuranceHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const update = await this.service.updateContratAssurance(req.params.id, req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public activeContratAssuranceHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const update = await this.service.activeContratAssurance(req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }


}