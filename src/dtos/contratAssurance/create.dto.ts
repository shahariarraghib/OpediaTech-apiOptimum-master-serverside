import { PackAssurance } from "../../entity/packAssurance.entity"
import { User } from "../../entity/user.entity"

export default interface CreateContratAssuranceDto {
    signature: string
    pdfContratAssurance: string
    operation: string
    etat: Boolean
    user: User
    packassurance: PackAssurance
}