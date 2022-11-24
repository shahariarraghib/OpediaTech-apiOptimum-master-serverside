import {Router} from "express";
import CompagnieController from "../controllers/compagnie.controller";

const compagnieRoutes = Router()
const controller = new CompagnieController()

compagnieRoutes.post('/create', controller.createCompanyHandler)
compagnieRoutes.post('/createMany', controller.createManyCompaniesHandler)
compagnieRoutes.get('/get/:name', controller.loadCompanyHandler)
compagnieRoutes.get('/getAll', controller.loadAllCompaniesHandler)

export default compagnieRoutes