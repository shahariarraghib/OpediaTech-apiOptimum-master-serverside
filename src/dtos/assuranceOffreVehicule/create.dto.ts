import { OffreVehicule } from "../../entity/offreVehicule.entity"

export default interface CreateAssuranceOffreVehiculeDto {
    reponsabiliteCivileVehic: boolean
    cascoPartielle: boolean
    cascoColission: boolean
    dommageParking: boolean
    assistanceVehic: boolean
    accidentVehic: boolean
    effetsPersonnels: boolean
    offrevehicule: OffreVehicule
}