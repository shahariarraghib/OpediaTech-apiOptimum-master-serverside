import {Router} from "express";
import OffreBatimentController from "../controllers/offreBatiment.controller";

const offreBatimentRoutes = Router()
const controller = new OffreBatimentController()

offreBatimentRoutes.post('/create', controller.createOffreBatimentHandler)
offreBatimentRoutes.put('/update', controller.updateOffreBatimentHandler)
offreBatimentRoutes.get('/get/:id', controller.loadOffreBatimentHandler)
offreBatimentRoutes.get('/getAll', controller.loadAllOffreBatimentHandler)

export default offreBatimentRoutes