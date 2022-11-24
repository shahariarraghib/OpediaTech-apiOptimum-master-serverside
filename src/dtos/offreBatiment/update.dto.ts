import { PackOffre } from "../../entity/packOffre.entity"

export default interface UpdateOffreBatimentDto {
    valeurBatim: number
    toitBatim: Boolean
    chauffageBatim: Boolean
    typeHabitation: string
    anneeConstruct: Date
    packoffre: PackOffre
}