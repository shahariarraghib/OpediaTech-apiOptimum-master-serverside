import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import UpdateCompagnieDto from "../dtos/compagnie/update.dto";
import FindCompagnieDto from "../dtos/compagnie/find.dto";
import { Compagnie } from "../entity/compagnie.entity";
import CreateCompagnieDto from "../dtos/compagnie/create.dto";

export class CompagnieService {

    private readonly repository: Repository<Compagnie>

    constructor() {
        this.repository = AppDataSource.getRepository(Compagnie)
    }

    public async loadCompany(data: any) {
        return await this.repository.createQueryBuilder("compagnie")
            .where("compagnie.nomCompagnie = :name", { name: data })
            .getOne()
    }

    public async loadAllCompanies() {
        return await this.repository.find()
    }

    public async createCompany(data: CreateCompagnieDto) {
        return await this.repository.save({ ...data })
    }
}