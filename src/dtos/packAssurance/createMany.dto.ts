import { Compagnie } from "../../entity/compagnie.entity"
import PackAssuranceDto from "./createPackAssurance.dto"

export default class PackAssuranceAltDto implements PackAssuranceDto {
    nomAssur: string
    logoAssur: string
    mimeType: string
    size: number
    compagnie: Compagnie

    constructor() {
        this.compagnie = new Compagnie()
    }
}