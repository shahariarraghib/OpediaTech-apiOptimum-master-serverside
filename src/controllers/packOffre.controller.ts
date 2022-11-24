import {NextFunction , Request, Response} from "express";
import { PackOffreService } from "../services/packOffre.service";

export default class PackOffreController {
    private readonly service: PackOffreService

    constructor() {
        this.service = new PackOffreService()
    }


    public createPackOffreHandler = async(req: Request, res: Response, next: NextFunction) => {
        try {                                   
            const packOffre = await this.service.createPackOffre(req.body)
            return res.status(201).json({
                message:'pack created',
                data: packOffre
            })
        }catch (e) {
            next(new Error(e.message))
        }
    }

    public createManyPackOffreHandler = async(req: Request, res: Response, next: NextFunction) => {
        try {
            var i=0
            req.body.packOffres.forEach(async packOffreData => {
                const packOffre = await this.service.createPackOffre(packOffreData)
                console.log("PackOffre inserting ... " + (i++) + " " + packOffre)
            });
            return res.status(201).json({
                message:'pack created',
                data: i
            })
        }catch (e) {
            next(new Error(e.message))
        }
    }
    
    public loadPackOffre = async (req: Request, res: Response, next: NextFunction) => {
        try {            
            const packOffre = await this.service.loadPackOffre()
            return res.status(200).json({
                message: 'success',
                data: packOffre
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }
}