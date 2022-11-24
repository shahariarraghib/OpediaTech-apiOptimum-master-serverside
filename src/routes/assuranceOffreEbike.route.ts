import { Router} from "express";
import AssuranceOffreEbikeController from "../controllers/assuranceOffreEbike.controller";

const assuranceOffreEbikeRoutes = Router()
const controller = new AssuranceOffreEbikeController()

assuranceOffreEbikeRoutes.post('/create', controller.createAssuranceOffreEbikeHandler)
assuranceOffreEbikeRoutes.put('/update', controller.updateAssuranceOffreEbikeHandler)
assuranceOffreEbikeRoutes.get('/get/:id',controller.loadAssuranceOffreEbikeHandler)
assuranceOffreEbikeRoutes.get('/getAll', controller.loadAllAssuranceOffreEbikeHandler)

export default assuranceOffreEbikeRoutes