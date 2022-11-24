import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CreateAssuranceOffreMenageDto from "../dtos/assuranceOffreMenage/create.dto";
import UpdateAssuranceOffreMenageDto from "../dtos/assuranceOffreMenage/update.dto";

import { AssuranceOffreMenage } from "../entity/assurOffreMenage.entity";

export class AssuranceOffreMenageService {

    private readonly repository: Repository<AssuranceOffreMenage>

    constructor() {
        this.repository = AppDataSource.getRepository("AssuranceOffreMenage");
    }

    public async loadAssuranceOffreMenage(idOffreMenage: any) {
        return await this.repository.createQueryBuilder("assuranceoffremenage")
            .leftJoinAndSelect("assuranceoffremenage.offremenage", "offremenage")
            .where("assuranceoffremenage.offremenage_id = :id", { id: idOffreMenage })
            .getOne()
    }

    public async loadAllAssuranceOffreMenage() {
        return await this.repository.createQueryBuilder("assuranceoffremenage")
            .leftJoinAndSelect("assuranceoffremenage.offremenage", "offremenage")
            .getMany()
    }

    public async updateAssuranceOffreMenage(data: UpdateAssuranceOffreMenageDto) {
        return await this.repository.createQueryBuilder()
        .update(AssuranceOffreMenage)
        .set({
            reponsabiliteCivileMen: data.reponsabiliteCivileMen,
            conduireVehicule: data.conduireVehicule,
            locauxLoues: data.locauxLoues,
            volSimple: data.volSimple,
            brisGlaceMen: data.brisGlaceMen,
            cascoMenage: data.cascoMenage,
            cyberAssuranceMen: data.cyberAssuranceMen
        })
        .where("assuranceoffremenage.offremenage_id = :id", { id: data.offremenage.id })
        .execute()
    }

    public async createAssuranceOffreMenage(data: CreateAssuranceOffreMenageDto) {
        return await this.repository.save({ ...data })
    }
}