import {CompagnieService} from "../services/compagnie.service";
import {NextFunction , Request, Response} from "express";

export default class CompagnieController {
    private readonly service: CompagnieService

    constructor() {
        this.service = new CompagnieService()
    }

    public loadCompanyHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const company = await this.service.loadCompany(req.params.name)
            return res.status(200).json({
                message: 'success',
                data: company
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }

    public loadAllCompaniesHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const companies = await this.service.loadAllCompanies()
            return res.status(200).json({
                message: 'success',
                data: companies
            })
        } catch (e) {
            next(new Error(e.message))
        }
    }
    

    public createCompanyHandler =async (req:Request, res:Response, next: NextFunction) => {
        try {
            const company = await this.service.createCompany(req.body)
            res.status(200).json({
                message: 'success',
                data: company
            })
        } catch (error) {
            next(new Error(error.message))
        }
    }

    public createManyCompaniesHandler = async (req:Request, res:Response, next: NextFunction) => {
        try {
            var i=0
            req.body.companies.forEach(async companyData => {
                const company = await this.service.createCompany(companyData)
                console.log("Company inserting ... " + (i++) + " " + company)
            });
            res.status(200).json({
                message: 'success',
                data: null
            })
        } catch (error) {
            console.log("\nAn error occured while  inserting companies ... \n")
            next(new Error(error.message))
        }
    }
}