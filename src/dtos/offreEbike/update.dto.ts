import { PackOffre } from "../../entity/packOffre.entity"

export default interface UpdateOffreEbikeDto {
    marqueEbike: string
    modeleEbike: string
    anneeAcquisition: Date
    prixEbike: number
    packoffre: PackOffre
}