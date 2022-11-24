import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CreateOffreBatimentDto from "../dtos/offreBatiment/create.dto";
import UpdateOffreBatimentDto from "../dtos/offreBatiment/update.dto";
import { OffreBatiment } from "../entity/offreBatiment.entity";
import { ContratOffreService } from "./contratOffre.service";

export class OffreBatimentService {


    private readonly repository: Repository<OffreBatiment>
    private readonly contratOffreService: ContratOffreService

    constructor() {
        this.repository = AppDataSource.getRepository("OffreBatiment");
    }

    public async createOffreBatiment(data: CreateOffreBatimentDto) {
        return await this.repository.save({ ...data })
    }

    public async loadOffreBatiment(idPackOffre: any) {
        return await this.repository.createQueryBuilder("offrebatiment")
            .leftJoinAndSelect("offrebatiment.packoffre", "packoffre")
            .where("offrebatiment.packOffre_id = :id", { id: idPackOffre })
            .getOne()
    }

    public async loadAllOffreBatiment() {
        return await this.repository.createQueryBuilder("offrebatiment")
            .leftJoinAndSelect("offrebatiment.packoffre", "packoffre")
            .getMany()
    }

    public async updateOffreBatiment(data: UpdateOffreBatimentDto) {
        return await this.repository.createQueryBuilder()
            .update(OffreBatiment)
            .set({
                valeurBatim: data.valeurBatim,
                toitBatim: data.toitBatim,
                chauffageBatim: data.chauffageBatim,
                typeHabitation: data.typeHabitation,
                anneeConstruct: data.anneeConstruct
            })
            .where("offrebatiment.packOffre_id = :id", { id: data.packoffre.id })
            .execute()
    }
}