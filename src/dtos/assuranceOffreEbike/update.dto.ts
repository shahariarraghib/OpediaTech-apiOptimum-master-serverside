import { OffreEbike } from "../../entity/offreEbike.entity"

export default interface UpdateAssuranceOffreEbikeDto {
    volEbike: boolean
    deteriorationEbike: boolean
    perteEbike: boolean
    assistanceEbike: boolean
    offreebike: OffreEbike
}