import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CreateOffreVehiculeDto from "../dtos/offreVehicule/create.dto";
import UpdateOffreVehiculeDto from "../dtos/offreVehicule/update.dto";
import { OffreVehicule } from "../entity/offreVehicule.entity";

export class OffreVehiculeService {


    private readonly repository: Repository<OffreVehicule>

    constructor() {
        this.repository = AppDataSource.getRepository("OffreVehicule");
    }

    public async createOffreVehicule(data: CreateOffreVehiculeDto) {
        return await this.repository.save({ ...data })
    }

    public async loadOffreVehicule(idPackOffre: any) {
        return await this.repository.createQueryBuilder("offrevehicule")
            .leftJoinAndSelect("offrevehicule.packoffre", "packoffre")
            .where("offrevehicule.packOffre_id = :id", { id: idPackOffre })
            .getOne()
    }

    public async loadAllOffreVehicule() {
        return await this.repository.createQueryBuilder("offrevehicule")
            .leftJoinAndSelect("offrevehicule.packoffre", "packoffre")
            .getMany()
    }

    public async updateOffreVehicule(data: UpdateOffreVehiculeDto) {
        return await this.repository.createQueryBuilder()
            .update(OffreVehicule)
            .set({
                marqueVehicle: data.marqueVehicle,
                typeVehicle: data.typeVehicle,
                premierDateCirculation: data.premierDateCirculation,
                receptionVehicle: data.receptionVehicle,
                prixCatalog: data.prixCatalog,
                optionVehicle: data.optionVehicle,
                distanceAnnuel: data.distanceAnnuel
            })
            .where("offrevehicule.packOffre_id = :id", { id: data.packoffre.id })
            .execute()
    }
}