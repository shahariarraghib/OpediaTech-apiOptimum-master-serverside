import { PackOffre } from "../../entity/packOffre.entity"

export default interface UpdateAssuranceOffreAutreDto {
    maladieLaMal: boolean
    maladieCompl: boolean
    voyage: boolean
    protectionJuridiq: boolean
    garantieLoyer: boolean
    animaux: boolean
    packoffre: PackOffre
}