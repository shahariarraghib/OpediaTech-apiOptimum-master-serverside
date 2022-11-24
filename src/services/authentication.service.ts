import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import Env from "../configs/config";
import { AppDataSource } from "../data-source";
import UpdatePasscodeDto from "../dtos/passcode/update.dto";
import PasscodeVerificationDto from "../dtos/passcode/verify.dto";
import CreateUserDto from "../dtos/user/create.dto";
import LoginDto from "../dtos/user/login.dto";
import PasswordDto from "../dtos/user/password.dto";
import SetPasswordDto from "../dtos/user/setpassword.dto";
import { Passcode } from "../entity/passcode.entity";
import { TypeUser } from "../entity/typeUser.entity";
import { User } from "../entity/user.entity";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASS_REGEX = /^(?=.*\d).{8,16}$/;
const NAME_REGEX = /^[a-z ,.'-]+$/i;

export default class AuthenticationService {

    private readonly userRepository: Repository<User>
    private readonly passcodeRepository: Repository<Passcode>

    constructor() {
        this.passcodeRepository = AppDataSource.getRepository(Passcode)
        this.userRepository = AppDataSource.getRepository(User)
    }

    public async registration(data: CreateUserDto) {

        if (data.emailUser == null || data.telUser == null || data.nomUser == null || data.prenomUser == null || data.passwordUser == null) {
            console.log('missing parameters');
            throw new Error('Veuillez renseigner correctement tous les champs.');
        }

        // Checking if data just contain alphabetic characters and a set of authorized characters for names
        if (!NAME_REGEX.test(data.nomUser) || !NAME_REGEX.test(data.prenomUser)) {  // Go to https://regexr.com/ to test this regex
            throw new Error('Veuillez renseigner correctement votre nom ou prénom');
        }

        // Testing user e-mail with e-mail regex before registration
        if (!EMAIL_REGEX.test(data.emailUser)) {
            console.log('email is not valid');
            throw new Error('Adresse email non valide.');
        }

        // Testing user password with pass regex
        if (!PASS_REGEX.test(data.passwordUser)) {
            console.log('invalid password (must be length 8 - 16 and include 1 number at least)');
            throw new Error('Mot de passe non valide (8 à 16 caractères autorisés et un chiffre au minimum.)');
        }

        // let user = this.getUserByPhoneNo(data.telUser)
        // if (user) {
        //     console.log('user already registered with the same phone number!');
        //     throw new Error('Vous êtes déjà inscrit avec ce numéro de téléphone')
        // }

        // user = this.findUserByEmail(data.emailUser)
        // if (user) {
        //     console.log('user already registered with the same mail!');
        //     throw new Error('Vous êtes déjà inscrit avec cette adresse mail')
        // }

        const typeUser = new TypeUser();
        typeUser.nomTypeUser = "user";
        const bcryptPassword = AuthenticationService.cryptPassword(data.passwordUser)
        data.passwordUser = bcryptPassword
        data.typeusers = typeUser;
        return this.userRepository.save({ ...data });
    }

    public async login(data: LoginDto) {

        if (data.emailUser != null && !EMAIL_REGEX.test(data.emailUser)) {
            console.log('email is not valid');
            throw new Error('Adresse email non valide.');
        }

        if (!PASS_REGEX.test(data.passwordUser)) {
            console.log('invalid password (must be length 8 - 16 and include 1 number at least)');
            throw new Error('Mot de passe non valide (8 à 16 caractères autorisés et un chiffre au minimum.)');
        }

        const user = await this.userRepository.createQueryBuilder("user")
            .leftJoinAndSelect("user.typeusers", "typeuser")
            .where("user.telUser = :tel", { tel: data.telUser })
            .orWhere("user.emailUser = :mail", { mail: data.emailUser })
            .getOne()

        if (user) {
            if (AuthenticationService.comparePassword(data.passwordUser, user.passwordUser)) {
                const authenticatedUser = {
                    id: user.id,
                    nomUser: user.nomUser,
                    prenomUser: user.prenomUser,
                    birthdayUser: user.birthdayUser,
                    nationalityUser: user.nationalityUser,
                    adrUser: user.adrUser,
                    postalUser: user.postalUser,
                    localityUser: user.localityUser,
                    codeCounsellor: user.codeCounsellor,
                    telUser: user.telUser,
                    emailUser: user.emailUser,
                    photoUser: user.photoUser,
                    validiteAdresse: user.validiteAdresse,
                    typeusers: user.typeusers
                }

                return jwt.sign(authenticatedUser, Env.key, {
                    algorithm: "HS512",
                    expiresIn: "1day"
                });

            } else {
                console.log("Password does not match with record!")
                throw Error("Mot de passe incorrect. Veuillez réessayer!")
            }
        } else {
            if (data.emailUser) {
                console.log(`Unknown  user with email : ${data.emailUser}`)
            } else {
                console.log(`Unknown  user with phoneNo: ${data.telUser}`)
            }
            throw Error('Utilisateur non trouvé.')
        }
    }

    public async updatePassword(authenticatedUser: any, data: PasswordDto) {

        if (!PASS_REGEX.test(data.newPassword)) {
            console.log('invalid password (must be length 8 - 16 and include 1 number at least)');
            throw new Error('Mot de passe non valide (8 à 16 caractères autorisés et un chiffre au minimum)');
        }

        const user = await this.userRepository.findOneBy({
            id: authenticatedUser.id
        })

        if (user) {
            if (data.passwordUser === user.passwordUser || AuthenticationService.comparePassword(data.passwordUser, user.passwordUser)) {
                user.passwordUser = AuthenticationService.cryptPassword(data.newPassword)
                return this.userRepository.save(user);
            } else {
                console.log("Old password not match with the record");
                throw new Error("L'ancien mot de passe est incorrect. Veuillez réessayer!")
            }
        } else {
            console.log("User not found !");
            throw new Error("Utilisateur non trouvé !")
        }
    }

    private static comparePassword(password: string, hashedPassword: string): boolean {
        return bcrypt.compareSync(password, hashedPassword)
    }

    private static cryptPassword(password: string): string {
        const salt = bcrypt.genSaltSync(12)
        return bcrypt.hashSync(password, salt)
    }

    public async getUserByPhoneNo(phoneNo: any) {
        return await this.userRepository.createQueryBuilder("user")
            .leftJoinAndSelect("user.typeusers", "typeuser")
            .where("user.telUser = :phoneNumber", { phoneNumber: phoneNo })
            .getOne();
    }

    public async findUserByEmail(email: string) {
        return await this.userRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.typeusers', 'typeuser')
            .where('user.emailUser = :emailUser', { emailUser: email })
            .getOne();
    }

    public async verifyPasscode(data: PasscodeVerificationDto) {
        const sentCode = data.code;
        const emailUser = data.emailUser;

        // Getting the latest valid record with the same user email and reset code
        const passcode = await this.passcodeRepository.createQueryBuilder("passcode")
            .where("passcode.emailUser = :emailUser", { emailUser: emailUser })
            .andWhere("passcode.isActive = :isActive", { isActive: true })
            .andWhere("passcode.code = :code", { code: sentCode })
            .orderBy('passcode.id', 'DESC')
            .getOne()

        if (passcode) {

            const datediff = (new Date().valueOf() - passcode.createdAt.valueOf());
            const duration = Math.abs(datediff) / 36e5    // Getting passcode duration in hours

            const user = await this.userRepository.createQueryBuilder("user")
                .leftJoinAndSelect("user.typeusers", "typeuser")
                .where("user.emailUser = :mail", { mail: emailUser })
                .getOne()

            if (user) {
                const authenticatedUser = {
                    id: user.id,
                    nomUser: user.nomUser,
                    prenomUser: user.prenomUser,
                    birthdayUser: user.birthdayUser,
                    nationalityUser: user.nationalityUser,
                    adrUser: user.adrUser,
                    postalUser: user.postalUser,
                    localityUser: user.localityUser,
                    codeCounsellor: user.codeCounsellor,
                    telUser: user.telUser,
                    emailUser: user.emailUser,
                    photoUser: user.photoUser,
                    validiteAdresse: user.validiteAdresse,
                    typeusers: user.typeusers
                }

                if ((passcode.code == sentCode) && (duration < 1)) {
                    const deactivate = await this.deactivatePasscode({
                        id: passcode.id,
                        emailUser: passcode.emailUser,
                        code: passcode.code,
                        createdAt: passcode.createdAt
                    });

                    if (deactivate) {
                        return jwt.sign(authenticatedUser, Env.key, {
                            algorithm: "HS512",
                            expiresIn: "1day"
                        });
                    }
                    throw new Error('Oups, Quelque chose s\'est mal passé')
                }
            }
            throw new Error('Cet email n\'est associé à aucun utilisateur.')
        }
        throw new Error("Code incorrect!");
    }

    public async deactivatePasscode(data: UpdatePasscodeDto) {
        return await this.passcodeRepository.createQueryBuilder()
            .update(Passcode)
            .set({
                isActive: false
            })
            .where("passcode.id = :id", { id: data.id })
            .andWhere("passcode.emailUser = :emailUser", { emailUser: data.emailUser })
            .andWhere('passcode.createdAt = :createdAt', { createdAt: data.createdAt })
            .execute()
    }

    public async setNewPassword(authenticatedUser: any, data: SetPasswordDto) {

        if (!PASS_REGEX.test(data.newPassword)) {
            console.log('invalid password (must be length 8 - 16 and include 1 number at least)');
            throw new Error('Mot de passe non valide (8 à 16 caractères autorisés et un chiffre au minimum)');
        }

        const user = await this.userRepository.findOneBy({
            id: authenticatedUser.id
        })

        if (user) {
            user.passwordUser = AuthenticationService.cryptPassword(data.newPassword)
            return this.userRepository.save(user);
        } else {
            throw new Error("Utilisateur non trouvé !")
        }
    }
}