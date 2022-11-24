import { TypeUser } from "../../entity/typeUser.entity"

export default interface UpdateUserDto {
    nomUser: string
    prenomUser: string
    birthdayUser: Date
    nationalityUser: string
    adrUser: string
    postalUser: string
    localityUser: string
    codeCounsellor: string
    telUser: string
    emailUser: string
    photoUser: string
    validiteAdresse: Date
    typeusers: TypeUser
}