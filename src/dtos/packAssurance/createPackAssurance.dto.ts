import { Compagnie } from "../../entity/compagnie.entity"

export default interface PackAssuranceDto {
    nomAssur: string
    logoAssur: string
    mimeType:string    
    size: number
    compagnie: Compagnie
}