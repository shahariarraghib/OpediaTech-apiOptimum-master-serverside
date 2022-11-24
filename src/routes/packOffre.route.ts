import {Router} from "express";
import PackOffreController from "../controllers/packOffre.controller";

const controller = new PackOffreController()
const packOffreRoutes = Router()

packOffreRoutes.get('/get', controller.loadPackOffre)
packOffreRoutes.post('/create', controller.createPackOffreHandler)
packOffreRoutes.post('/createMany', controller.createManyPackOffreHandler)

export default packOffreRoutes