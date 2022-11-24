import { PackOffre } from "../../entity/packOffre.entity"

export default interface UpdateOffreMenageDto {
    nbrePiece: number
    inventMen: number
    nbreAdulte: number
    nbreEnfant: number
    proprietaire: Boolean
    packoffre: PackOffre
}