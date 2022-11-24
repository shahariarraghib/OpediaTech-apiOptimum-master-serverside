import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CreateAssuranceOffreBatimentDto from "../dtos/assuranceOffreBatiment/create.dto";
import UpdateAssureOffreBatimentDto from "../dtos/assuranceOffreBatiment/update.dto";
import { AssuranceOffreBatiment } from "../entity/assurOffreBatiment.entity";

export class AssuranceOffreBatimentService {

    private readonly repository: Repository<AssuranceOffreBatiment>

    constructor() {
        this.repository = AppDataSource.getRepository("AssuranceOffreBatiment");
    }

    public async loadAssuranceOffreBatiment(idOffreBatiment: any) {
        return await this.repository.createQueryBuilder("assuranceoffrebatiment")
            .leftJoinAndSelect("assuranceoffrebatiment.offrebatiment", "offrebatiment")
            .where("assuranceoffrebatiment.offrebatiment_id = :id", { id: idOffreBatiment })
            .getOne()
    }

    public async loadAllAssuranceOffreBatiment() {
        return await this.repository.createQueryBuilder("assuranceoffrebatiment")
            .leftJoinAndSelect("assuranceoffrebatiment.offrebatiment", "offrebatiment")
            .getMany()
    }

    public async updateAssuranceOffreBatiment(data: UpdateAssureOffreBatimentDto) {
        return await this.repository.createQueryBuilder()
            .update(AssuranceOffreBatiment)
            .set({
                responsabiliteCivileBatim: data.responsabiliteCivileBatim,
                amenagementExt: data.amenagementExt,
                panneauSolaire: data.panneauSolaire,
                trembleTerre: data.trembleTerre,
                brisGlaceBatim: data.brisGlaceBatim,
                cascoBatiment: data.cascoBatiment
            })
            .where("assuranceoffrebatiment.offrebatiment_id = :id", { id: data.offrebatiment.id })
            .execute()
    }

    public async createAssuranceOffreBatiment(data: CreateAssuranceOffreBatimentDto) {
        return await this.repository.save({ ...data })
    }
}