import { NextFunction, Request, Response } from "express";
import { MediaHandlingService } from "../services/mediaHandling.service";
import { PackassuranceService } from "../services/packAssurance.service";

export default class PackAssuranceController {
    private readonly service: PackassuranceService
    private readonly uploadService: MediaHandlingService

    constructor() {
        this.service = new PackassuranceService()
        this.uploadService = new MediaHandlingService()
    }


    public createPackAssuranceHandler = async (req: any, res: Response, next: NextFunction) => {
        try {
            const packAssurance = await this.service.createPackAssurance(req.body)
            return res.status(201).json({
                message: 'pack created',
                data: packAssurance
            })
            
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public loadPackAssuranceHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const packAssurance = await this.service.loadPackAssurance(req.params.name)
            return res.status(200).json({
                message: 'success',
                data: packAssurance
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }
    public loadCompaniesPackAssuranceHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const packAssurance = await this.service.loadCompaniesPackAssurance(req.params.id)
            return res.status(200).json({
                message: 'success',
                data: packAssurance
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public createManyPackAssuranceHandler = async (req:Request, res:Response, next: NextFunction) => {
        try {
            var i=0
            req.body.packAssurances.forEach(async packAssuranceData => {
                const packAssurance = await this.service.createPackAssuranceAlt(packAssuranceData)
                console.log("PackAssurance inserting ... " + (i++) + " " + packAssurance)
            });
            res.status(200).json({
                message: 'success',
                data: null
            })
        } catch (error) {
            console.log("\nAn error occured while  inserting packAssurances ... \n")
            next(new Error(error.message))
        }
    }
    
    public loadPackWithNameAssurHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const packAssurance = await this.service.loadPackWithNameAssur()
            return res.status(200).json({
                message: 'success',
                data: packAssurance
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }
}
