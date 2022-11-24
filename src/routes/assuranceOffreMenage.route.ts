import { Router } from "express";
import AssuranceOffreMenageController from "../controllers/assuranceOffreMenage.controller";

const assuranceOffreMenageRoutes = Router()
const controller = new AssuranceOffreMenageController()

assuranceOffreMenageRoutes.post('/create', controller.createAssuranceOffreMenageHandler)
assuranceOffreMenageRoutes.get('/get/:id', controller.loadAssuranceOffreMenageHandler)
assuranceOffreMenageRoutes.put('/update', controller.updateAssuranceOffreMenageHandler)
assuranceOffreMenageRoutes.get('/getAll', controller.loadAllAssuranceOffreMenageHandler)

export default assuranceOffreMenageRoutes