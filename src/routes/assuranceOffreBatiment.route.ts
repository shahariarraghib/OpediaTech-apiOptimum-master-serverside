import { Router } from "express";
import AssuranceOffreBatimentController from "../controllers/assuranceOffreBatiment.controller";

const assuranceOffreBatimentRoutes = Router()
const controller = new AssuranceOffreBatimentController()

assuranceOffreBatimentRoutes.post('/create', controller.createAssuranceOffreBatimentHandler)
assuranceOffreBatimentRoutes.get('/get/:id', controller.loadAssuranceOffreBatimentHandler)
assuranceOffreBatimentRoutes.put('/update', controller.updateAssuranceOffreBatimentHandler)
assuranceOffreBatimentRoutes.get('/getAll', controller.loadAllAssuranceOffreBatimentHandler)

export default assuranceOffreBatimentRoutes