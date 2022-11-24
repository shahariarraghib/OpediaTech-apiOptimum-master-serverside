import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CreateAssuranceOffreAutreDto from "../dtos/assuranceOffreAutre/create.dto";
import UpdateAssureOffreAutreDto from "../dtos/assuranceOffreAutre/update.dto";
import { AssuranceOffreAutre } from "../entity/assurOffreAutre.entity";

export class AssuranceOffreAutreService {


    private readonly repository: Repository<AssuranceOffreAutre>

    constructor() {
        this.repository = AppDataSource.getRepository("AssuranceOffreAutre");
    }

    public async loadAssuranceOffreAutre(idPackOffre: any) {
        return await this.repository.createQueryBuilder("assuranceoffreautre")
            .leftJoinAndSelect("assuranceoffreautre.packoffre", "packoffre")
            .where("assuranceoffreautre.packOffre_id = :id", { id: idPackOffre })
            .getOne()
    }

    public async loadAllAssuranceOffreAutre() {
        return await this.repository.createQueryBuilder("assuranceoffreautre")
            .leftJoinAndSelect("assuranceoffreautre.packoffre", "packoffre")
            .getMany()
    }

    public async updateAssuranceOffreAutre(data: UpdateAssureOffreAutreDto) {
        return await this.repository.createQueryBuilder()
            .update(AssuranceOffreAutre)
            .set({
                maladieLaMal: data.maladieLaMal,
                maladieCompl: data.maladieCompl,
                voyage: data.voyage,
                protectionJuridiq: data.protectionJuridiq,
                garantieLoyer: data.garantieLoyer,
                animaux: data.animaux
            })
            .where("assuranceoffreautre.packOffre_id = :id", { id: data.packoffre.id })
            .execute()
    }

    public async createAssuranceOffreAutre(data: CreateAssuranceOffreAutreDto) {
        return await this.repository.save({ ...data })
    }
}