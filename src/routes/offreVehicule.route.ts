import {Router} from "express";
import OffreVehiculeController from "../controllers/offreVehicule.controller";

const offreVehiculeRoutes = Router()
const controller = new OffreVehiculeController()

offreVehiculeRoutes.post('/create', controller.createOffreVehiculeHandler)
offreVehiculeRoutes.put('/update', controller.updateOffreVehiculeHandler)
offreVehiculeRoutes.get('/get/:id', controller.loadOffreVehiculeHandler)
offreVehiculeRoutes.get('/getAll', controller.loadAllOffreVehiculeHandler)

export default offreVehiculeRoutes