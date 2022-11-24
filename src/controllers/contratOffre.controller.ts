import { NextFunction, Request, Response } from "express";
import AuthenticatedUser from "../interfaces/authenticatedUser";
import { ContratOffreService } from "../services/contratOffre.service";



export default class ContratOffreController {

    private readonly service: ContratOffreService

    constructor() {
        this.service = new ContratOffreService()
    }

    public loadContratOffreHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {
            const contratOffre = await this.service.loadContratOffre(req.user.id, req.params.idPackoffre)
            return res.status(200).json({
                message: 'success',
                data: contratOffre
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadContratOffreByStateHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {
            const contratOffre = await this.service.loadContratOffreByState(req.user.id, req.body.idPackoffre, req.body.etat)
            return res.status(200).json({
                message: 'success',
                data: contratOffre
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createContratOffreHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {
            const contratOffre = await this.service.createContratOffre(req.user.id, req.body)
            res.status(200).json({
                message: 'success',
                data: contratOffre
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public loadAllContratOffreHandler = async (req: AuthenticatedUser, res: Response, next: NextFunction) => {
        try {
            const contratOffre = await this.service.loadAllContratOffre(req.user.id)
            return res.status(200).json({
                message: 'success',
                data: contratOffre
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public updateContratOffreHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const update = await this.service.updateContratOffre(req.params.id, req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public activeContratOffreHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const update = await this.service.activeContratOffre(req.body)
            return res.status(200).json({
                message: 'success',
                data: update
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }
}