import { PackOffre } from "../../entity/packOffre.entity"

export default interface CreateOffreVehiculeDto {
    marqueVehicle: string
    typeVehicle: string
    premierDateCirculation: Date
    receptionVehicle: string
    prixCatalog: number
    optionVehicle: string
    distanceAnnuel: number
    packoffre: PackOffre
}