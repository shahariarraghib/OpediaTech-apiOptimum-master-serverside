import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CreateContratAssuranceDto from "../dtos/contratAssurance/create.dto";
import UpdateContratAssuranceDto, { ActiveContratAssurDto } from "../dtos/contratAssurance/update.dto";
import { ContratAssurance } from "../entity/contratAssurance.entity";


export class ContratAssuranceService {
    private readonly repository: Repository<ContratAssurance>

    constructor() {
        this.repository = AppDataSource.getRepository(ContratAssurance)
    }

    public async loadContratAssurance(idUser: any, idPackAssurance: any) {
        return await this.repository.createQueryBuilder("contratassurance")
            .leftJoinAndSelect('contratassurance.user', 'user')
            .leftJoinAndSelect('contratassurance.packassurance', 'packassurance')
            .where("contratassurance.user_id = :userId", { userId: idUser })
            .andWhere('contratassurance.packassurance_id = :packassuranceId', { packassuranceId: idPackAssurance })
            .getOne()

    }

    public async loadAllContratAssurance(idUser:any) {
        return await this.repository.createQueryBuilder("contratassurance")
            .leftJoinAndSelect('contratassurance.user', 'user')
            .leftJoinAndSelect('contratassurance.packassurance', 'packassurance')
            .leftJoinAndSelect('packassurance.compagnie', 'compagnie')
            .where("contratassurance.user_id = :userId", { userId: idUser })
            .andWhere('contratassurance.etat = :etat', { etat: true })
            .getMany()

    }

    public async updateContratAssurance(idContrat: any, data: UpdateContratAssuranceDto) {
        return await this.repository.update(idContrat, data)
    }

    public async createContratAssurance(idUser: any, data: CreateContratAssuranceDto) {
        data.user = idUser;
        return await this.repository.save({ ...data })
    }

    public async activeContratAssurance(data: ActiveContratAssurDto) {
        return await this.repository.createQueryBuilder()
            .update(ContratAssurance)
            .set({
                operation: data.operation,
                prixAssur: data.prixAssur,
            })
            .where("contratassurance.user_id = :idUser", { idUser: data.user_id })
            .andWhere('contratassurance.packassurance_id = :idPackAssur', { idPackAssur: data.packassur_id })
            .andWhere('contratassurance.id = :idContrat', { idContrat: data.idContrat })
            .execute()
    }
}