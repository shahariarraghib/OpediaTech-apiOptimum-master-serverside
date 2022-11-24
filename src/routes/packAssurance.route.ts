import {Router} from "express";
import PackAssuranceController from "../controllers/packAssurance.controller";

const controller = new PackAssuranceController()
const packAssuranceRoutes = Router()

packAssuranceRoutes.get('/get/:name', controller.loadPackAssuranceHandler)
packAssuranceRoutes.get('/loadCompanies/:id', controller.loadCompaniesPackAssuranceHandler)
packAssuranceRoutes.get('/loadWithNameAssur', controller.loadPackWithNameAssurHandler)
packAssuranceRoutes.post('/create', controller.createPackAssuranceHandler)
packAssuranceRoutes.post('/createMany', controller.createManyPackAssuranceHandler)      // For devlopment only. Comment For Production !

export default packAssuranceRoutes