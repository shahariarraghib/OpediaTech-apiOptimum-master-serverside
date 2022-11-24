import {Router} from "express";
import UserController from "../controllers/user.controller";

const userRoutes = Router()
const controller = new UserController()

userRoutes.get('/get', controller.loadUserHandler)
userRoutes.get('/getAll', controller.loadAllUserHandler )
userRoutes.get('/loadUserType/:type', controller.loadUserByTypeHandler)
userRoutes.put('/update-profile-photo', controller.updateProfilePhotoHandler)
userRoutes.put('/update', controller.updateUserHandler)





export default userRoutes