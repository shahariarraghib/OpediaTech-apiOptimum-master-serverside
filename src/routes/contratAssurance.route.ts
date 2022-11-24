import { Router } from "express";
import ContratAssuranceController from "../controllers/contratAssurance.controller";

const contratAssuranceRoutes = Router()
const controller = new ContratAssuranceController()

contratAssuranceRoutes.post('/create', controller.createContratAssuranceHandler)
contratAssuranceRoutes.get('/get/:idPackAssur', controller.loadContratAssuranceHandler)
contratAssuranceRoutes.put('/update/:id', controller.updateContratAssuranceHandler)
contratAssuranceRoutes.put('/active', controller.activeContratAssuranceHandler) // For admin users purposes
contratAssuranceRoutes.get('/getAll', controller.loadAllContratAssuranceHandler)

export default contratAssuranceRoutes