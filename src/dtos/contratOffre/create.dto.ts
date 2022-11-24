import { PackOffre } from "../../entity/packOffre.entity"
import { User } from "../../entity/user.entity"

export default interface CreateContratOffreDto {
    pdfContratOffre: string
    signature: string
    operation: string
    etat: Boolean
    user: User
    packoffre: PackOffre
}