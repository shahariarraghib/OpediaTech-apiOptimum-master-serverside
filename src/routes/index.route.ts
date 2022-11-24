import {Router} from "express";
import authenticationRoutes from "./authentication.route";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import userRoutes from "./user.route";
import packAssuranceRoutes from "./packAssurance.route";
import compagnieRoutes from "./compagnie.route";
import assuranceOffreAutreRoutes from "./assuranceOffreAutre.route";
import assuranceOffreBatimentRoutes from "./assuranceOffreBatiment.route";
import assuranceOffreMenageRoutes from "./assuranceOffreMenage.route";
import assuranceOffreEbikeRoutes from "./assuranceOffreEbike.route";
import assuranceOffreVehiculeRoutes from "./assuranceOffreVehicule.route";
import packOffreRoutes from "./packOffre.route";
import offreEbikeRoutes from "./offreEbike.route";
import offreBatimentRoutes from "./offreBatiment.route";
import offreMenageRoutes from "./offreMenage.route";
import offreVehiculeRoutes from "./offreVehicule.route";
import MessageRoutes from "./message.route";
import contratOffreRoutes from "./contratOffre.route";
import contratAssuranceRoutes from "./contratAssurance.route";
import mediaHandlingRoutes from "./mediaHandling.route";
import smsOTPRoutes from "./smsOTP.route";
import sendMailRoutes from "./sendMail.route";
import passwordResetRoutes from "./passwordReset.route";

const apiRouter = Router()

apiRouter.use('/authentication', authenticationRoutes)
apiRouter.use('/users', authenticationMiddleware, userRoutes)

apiRouter.use('/packassurance', authenticationMiddleware, packAssuranceRoutes)
apiRouter.use('/packoffre', authenticationMiddleware, packOffreRoutes)

apiRouter.use('/companies', authenticationMiddleware, compagnieRoutes)
apiRouter.use('/assuranceOffreAutres', authenticationMiddleware, assuranceOffreAutreRoutes)
apiRouter.use('/offreEbike', authenticationMiddleware, offreEbikeRoutes)
apiRouter.use('/offreBatiment', authenticationMiddleware, offreBatimentRoutes)
apiRouter.use('/offreMenage', authenticationMiddleware, offreMenageRoutes)
apiRouter.use('/offreVehicule', authenticationMiddleware, offreVehiculeRoutes)
apiRouter.use('/assuranceOffreBatiment', authenticationMiddleware, assuranceOffreBatimentRoutes)
apiRouter.use('/assuranceOffreMenage', authenticationMiddleware, assuranceOffreMenageRoutes)
apiRouter.use('/assuranceOffreEbike', authenticationMiddleware, assuranceOffreEbikeRoutes)
apiRouter.use('/assuranceOffreVehicule', authenticationMiddleware, assuranceOffreVehiculeRoutes)
apiRouter.use('/message', authenticationMiddleware, MessageRoutes)
apiRouter.use('/contratoffre', authenticationMiddleware, contratOffreRoutes)
apiRouter.use('/contratassurance', authenticationMiddleware, contratAssuranceRoutes)

apiRouter.use('/files', authenticationMiddleware, mediaHandlingRoutes)
apiRouter.use('/otp', smsOTPRoutes)
apiRouter.use('/mailing', sendMailRoutes)
apiRouter.use('/forgot-password', passwordResetRoutes)


export default apiRouter