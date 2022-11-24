import { OffreMenage } from "../../entity/offreMenage.entity"

export default interface CreateAssuranceOffreMenageDto {
    reponsabiliteCivileMen: boolean
    conduireVehicule: boolean
    locauxLoues: boolean
    volSimple: boolean
    brisGlaceMen: boolean
    cascoMenage: boolean
    cyberAssuranceMen: boolean
    offremenage: OffreMenage
}