import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CreateAssuranceOffreEbikeDto from "../dtos/assuranceOffreEbike/create.dto";
import UpdateAssuranceOffreEbikeDto from "../dtos/assuranceOffreEbike/update.dto";

import { AssuranceOffreEbike } from "../entity/assurOffreEbike.entity";

export class AssuranceOffreEbikeService {

    private readonly repository: Repository<AssuranceOffreEbike>

    constructor() {
        this.repository = AppDataSource.getRepository("AssuranceOffreEbike")
    }

    public async loadAssuranceOffreEbike(idOffreEbike: any) {
        return await this.repository.createQueryBuilder("assuranceoffreebike")
                                    .leftJoinAndSelect("assuranceoffreebike.offreebike", "offreebike")
                                    .where("assuranceoffreebike.offreebike_id = :id", { id: idOffreEbike })
                                    .getOne()
    }

    public async loadAllAssuranceOffreEbike() {
        return await this.repository.createQueryBuilder("assuranceoffreebike")
                                    .leftJoinAndSelect("assuranceoffreebike.offreebike", "offreebike")
                                    .getMany()
    }

    public async updateAssuranceOffreEbike(data: UpdateAssuranceOffreEbikeDto) {
        return await this.repository.createQueryBuilder()
                                    .update(AssuranceOffreEbike)
                                    .set({
                                        volEbike: data.volEbike,
                                        deteriorationEbike: data.deteriorationEbike,
                                        perteEbike: data.perteEbike,
                                        assistanceEbike: data.assistanceEbike,
                                    })
                                    .where("assuranceoffreebike.offreebike_id = :id", { id: data.offreebike.id })
                                    .execute()
    }

    public async createAssuranceOffreEbike(data: CreateAssuranceOffreEbikeDto) {
        return await this.repository.save({ ...data })
    }
}