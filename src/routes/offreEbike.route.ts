import {Router} from "express";
import OffreEbikeController from "../controllers/offreEbike.controller";

const offreEbikeRoutes = Router()
const controller = new OffreEbikeController()

offreEbikeRoutes.post('/create', controller.createOffreEbikeHandler)
offreEbikeRoutes.put('/update', controller.updateOffreEbikeHandler)
offreEbikeRoutes.get('/get/:id', controller.loadOffreEbikeHandler)
offreEbikeRoutes.get('/getAll', controller.loadAllOffreEbikeHandler)

export default offreEbikeRoutes