import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CreateOffreEbikeDto from "../dtos/offreEbike/create.dto";
import UpdateOffreEbikeDto from "../dtos/offreEbike/update.dto";
import { OffreEbike } from "../entity/offreEbike.entity";

export class OffreEbikeService {


    private readonly repository: Repository<OffreEbike>

    constructor() {
        this.repository = AppDataSource.getRepository("OffreEbike");
    }

    public async createOffreEbike(data: CreateOffreEbikeDto) {
        return await this.repository.save({ ...data })
    }

    public async loadOffreEbike(idPackOffre: any) {
        return await this.repository.createQueryBuilder("offreebike")
            .leftJoinAndSelect("offreebike.packoffre", "packoffre")
            .where("offreebike.packOffre_id = :id", { id: idPackOffre })
            .getOne()
    }

    public async loadAllOffreEbike() {
        return await this.repository.createQueryBuilder("offreebike")
            .leftJoinAndSelect("offreebike.packoffre", "packoffre")
            .getMany()
    }

    public async updateOffreEbike(data: UpdateOffreEbikeDto) {
        return await this.repository.createQueryBuilder()
            .update(OffreEbike)
            .set({
                marqueEbike: data.marqueEbike,
                modeleEbike: data.modeleEbike,
                anneeAcquisition: data.anneeAcquisition,
                prixEbike: data.prixEbike,
            })
            .where("offreebike.packOffre_id = :id", { id: data.packoffre.id })
            .execute()
    }
}