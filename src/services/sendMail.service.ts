import FixPasswordDto from "../dtos/sendMail/passcodeRecoveryMail.dto";
import WelcomeMailDto from "../dtos/sendMail/welcomeMail.dto";

const sgMail = require('@sendgrid/mail')

require('dotenv').config()

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const welcomeContent = `Bonjour, <br> Merci pour votre inscription sur notre application. <br> Notre but est de vous simplifier la vie 
                        et de vous faire profiter des meilleures solutions du marché.<br> Indiquez-nous simplement dans quelles compagnies vous avez 
                        des contrats et vous retrouverez vos polices digitalisées ces prochains jours.<br><br>Je suis à votre disposition en 
                        cas de questions. <br><br> Optimum Solutions SA <br> +41 32 322 11 05 <br>Bernstrasse 18 <br>2555 Brugg <br>`;

const fromMail = 'support@cmedialinks.ch';

export class SendMailService {

    constructor() {
        sgMail.setApiKey(SENDGRID_API_KEY);
    }

    public async createWelcomeMailMsg(data: WelcomeMailDto) {
        return await sgMail.send({
            to: data.to,
            from: fromMail,
            subject: 'Bienvenue sur Optimum Solutions SA',
            text: welcomeContent,
            html: `<p>${welcomeContent}<p>`
        });
    }

    public async sendRecoveryPassCodeMsg(data: FixPasswordDto, code: number) {
        console.log('Inside sgMail service');
        const content = `Bonjour ${data.nomUser} ${data.prenomUser}, <br> 
                        Le code de réinitialisation de votre mot de passe est : <b>${code}</b>
                        <br>Ne le divulguez à personne!`;

        return await sgMail.send({
            to: data.to,
            from: fromMail,
            subject: 'Réinitialisation de votre mot de passe Optimum Solutions SA',
            text: content,
            html: `<p>${content}</p>`
        });
    }

    public async sendMailInfoPasswordReset(data: FixPasswordDto) {
        console.log('Inside sgMail service');

        const content = `Bonjour ${data.nomUser} ${data.prenomUser}, <br> 
                        Votre mot de passe a été réinitialisé!<br><br>
                        <em>Si vous n'êtes pas à l'origine de cette opération, veuillez définir un nouveau mot de passe sécurisé.</em>`;

        return await sgMail.send({
            to: data.to,
            from: fromMail,
            subject: 'Mot de Passe Optimum Solutions SA Réinitialisé',
            text: content,
            html: `<p>${content}</p>`
        });
    }
}