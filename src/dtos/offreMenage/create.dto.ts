import { PackOffre } from "../../entity/packOffre.entity"

export default interface CreateOffreMenageDto {
    nbrePiece: number
    inventMen: number
    nbreAdulte: number
    nbreEnfant: number
    proprietaire: Boolean
    packoffre: PackOffre
}