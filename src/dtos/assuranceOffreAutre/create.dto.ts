import { PackOffre } from "../../entity/packOffre.entity"

export default interface CreateAssuranceOffreAutreDto {
    maladieLaMal: boolean
    maladieCompl: boolean
    voyage: boolean
    protectionJuridiq: boolean
    garantieLoyer: boolean
    animaux: boolean
    packoffre: PackOffre
}