import { Router } from "express";
import ContratOffreController from "../controllers/contratOffre.controller";

const contratOffreRoutes = Router()
const controller = new ContratOffreController()

contratOffreRoutes.post('/create', controller.createContratOffreHandler)
contratOffreRoutes.get('/get/:idPackoffre', controller.loadContratOffreHandler)
contratOffreRoutes.get('/getByState', controller.loadContratOffreByStateHandler)
contratOffreRoutes.put('/update/:id', controller.updateContratOffreHandler)
contratOffreRoutes.put('/active', controller.activeContratOffreHandler) // For admin users purposes
contratOffreRoutes.get('/getAll', controller.loadAllContratOffreHandler)

export default contratOffreRoutes