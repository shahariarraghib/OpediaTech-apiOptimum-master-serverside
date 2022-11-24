import { NextFunction, Request, Response } from "express";
import AuthenticationService from "../services/authentication.service";
import { PasscodeService } from "../services/passcode.service";
import { SendMailService } from "../services/sendMail.service";

export default class PasscodeController {

    private readonly passcodeService: PasscodeService
    private readonly sendMailService: SendMailService
    private readonly authService: AuthenticationService

    constructor() {
        this.passcodeService = new PasscodeService()
        this.sendMailService = new SendMailService()
        this.authService = new AuthenticationService()
    }

    public getPasscodeForPasswordRecover = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const email = req.body.emailUser;
            const user = await this.authService.findUserByEmail(email);
            console.log("\n User " + JSON.stringify(user));

            if (user) {
                const randomCode = await this.passcodeService.generatePasscodeForUser()
                const passcode = await this.passcodeService.createPasscode(user.emailUser, randomCode);

                console.log("\n Pass reset : " + JSON.stringify(passcode));
                
                if (passcode) {
                    const sendMail = await this.sendMailService.sendRecoveryPassCodeMsg(
                        {
                            to: user.emailUser,
                            nomUser: user.nomUser,
                            prenomUser:user.prenomUser
                        }, 
                        passcode.code
                    );
                    
                    console.log("\n Send Mail " + JSON.stringify(sendMail));
                    
                    if (sendMail[0].statusCode == 202) {
                        return res.status(201).json({
                            message: 'success',
                            data: sendMail
                        })    
                    }
                    throw new Error('Impossible d\'envoyer le code de récupération à cette adresse');
                }
                throw new Error('Oups! Impossible de gérérer un code de récupération.')
            }
            throw new Error('Cet email n\'est associé à aucun utilisateur.')
        } catch (e) {
            console.log(e.message);
            next(new Error(e.message))
        }
    }
}



