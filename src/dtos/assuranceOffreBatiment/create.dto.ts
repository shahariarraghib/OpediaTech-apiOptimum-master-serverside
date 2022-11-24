import { OffreBatiment } from "../../entity/offreBatiment.entity"

export default interface CreateAssuranceOffreBatimentDto {
    responsabiliteCivileBatim: boolean
    amenagementExt: boolean
    panneauSolaire: boolean
    trembleTerre: boolean
    brisGlaceBatim: boolean
    cascoBatiment: boolean
    offrebatiment: OffreBatiment
}