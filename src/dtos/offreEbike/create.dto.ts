import { PackOffre } from "../../entity/packOffre.entity"

export default interface CreateOffreEbikeDto {
    marqueEbike: string
    modeleEbike: string
    anneeAcquisition: Date
    prixEbike: number
    packoffre: PackOffre
}