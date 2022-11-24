import {Router} from "express";
import OffreMenageController from "../controllers/offreMenage.controller";

const offreMenageRoutes = Router()
const controller = new OffreMenageController()

offreMenageRoutes.post('/create', controller.createOffreMenageHandler)
offreMenageRoutes.put('/update', controller.updateOffreMenageHandler)
offreMenageRoutes.get('/get/:id', controller.loadOffreMenageHandler)
offreMenageRoutes.get('/getAll', controller.loadAllOffreMenageHandler)

export default offreMenageRoutes