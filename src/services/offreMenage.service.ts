import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CreateOffreMenageDto from "../dtos/offreMenage/create.dto";
import UpdateOffreMenageDto from "../dtos/offreMenage/update.dto";
import { OffreMenage } from "../entity/offreMenage.entity";

export class OffreMenageService {


    private readonly repository: Repository<OffreMenage>

    constructor() {
        this.repository = AppDataSource.getRepository("OffreMenage");
    }

    public async createOffreMenage(data: CreateOffreMenageDto) {
        return await this.repository.save({ ...data })
    }

    public async loadOffreMenage(idPackOffre: any) {
        return await this.repository.createQueryBuilder("offremenage")
            .leftJoinAndSelect("offremenage.packoffre", "packoffre")
            .where("offremenage.packOffre_id = :id", { id: idPackOffre })
            .getOne()
    }

    public async loadAllOffreMenage() {
        return await this.repository.createQueryBuilder("offremenage")
            .leftJoinAndSelect("offremenage.packoffre", "packoffre")
            .getMany()
    }

    public async updateOffreMenage(data: UpdateOffreMenageDto) {
        return await this.repository.createQueryBuilder()
            .update(OffreMenage)
            .set({
                nbrePiece: data.nbrePiece,
                inventMen: data.inventMen,
                nbreAdulte: data.nbreAdulte,
                nbreEnfant: data.nbreEnfant,
                proprietaire: data.proprietaire
            })
            .where("offremenage.packOffre_id = :id", { id: data.packoffre.id })
            .execute()
    }
}