import { Router } from "express";
import AssuranceOffreVehiculeController from "../controllers/assuranceOffreVehicule.controller";

const assuranceOffreVehiculeRoutes = Router()
const controller = new AssuranceOffreVehiculeController()

assuranceOffreVehiculeRoutes.post('/create', controller.createAssuranceOffreVehiculeHandler)
assuranceOffreVehiculeRoutes.put('/update', controller.updateAssuranceOffreVehiculeHandler)
assuranceOffreVehiculeRoutes.get('/get/:id', controller.loadAssuranceOffreVehiculeHandler)
assuranceOffreVehiculeRoutes.get('/getAll', controller.loadAllAssuranceOffreVehiculeHandler)

export default assuranceOffreVehiculeRoutes
