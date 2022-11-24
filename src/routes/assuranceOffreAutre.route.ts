import {Router} from "express";
import AssuranceOffreAutreController from "../controllers/assuranceOffreAutre.controller";

const assuranceOffreAutreRoutes = Router()
const controller = new AssuranceOffreAutreController()

assuranceOffreAutreRoutes.post('/create', controller.createAssuranceOffreAutreHandler)
assuranceOffreAutreRoutes.put('/update', controller.updateAssuranceOffreAutreHandler)
assuranceOffreAutreRoutes.get('/get/:id', controller.loadAssuranceOffreAutreHandler)
assuranceOffreAutreRoutes.get('/getAll', controller.loadAllAssuranceOffreAutreHandler)

export default assuranceOffreAutreRoutes