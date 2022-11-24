import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CreateContratOffreDto from "../dtos/contratOffre/create.dto";
import UpdateContratOffreDto, { ActiveContratOffreDto } from "../dtos/contratOffre/update.dto";
import { ContratOffre } from "../entity/contratOffre.entity";


export class ContratOffreService {
    private readonly repository: Repository<ContratOffre>

    constructor() {
        this.repository = AppDataSource.getRepository(ContratOffre)
    }

    public async loadContratOffre(idUser: any, idPackOffre: any) {
        return await this.repository.createQueryBuilder("contratoffre")
            .leftJoinAndSelect('contratoffre.user', 'user')
            .leftJoinAndSelect('contratoffre.packoffre', 'packoffre')
            .where("contratoffre.user_id = :userId", { userId: idUser })
            .andWhere('contratoffre.packoffre_id = :packoffreId', { packoffreId: idPackOffre })
            .getOne()

    }

    // Getting ContratOffre Objects by state : True(1) for instances that are active, False(0)
    public async loadContratOffreByState(idUser: any, idPackOffre: any, state: Boolean) {
        return await this.repository.createQueryBuilder("contratoffre")
            .leftJoinAndSelect('contratoffre.user', 'user')
            .leftJoinAndSelect('contratoffre.packoffre', 'packoffre')
            .where("contratoffre.user_id = :userId", { userId: idUser })
            .andWhere('contratoffre.packoffre_id = :packoffreId', { packoffreId: idPackOffre })
            .andWhere('contratoffre.etat = :etat', { etat: state })
            .getOne()

    }

    public async loadAllContratOffre(idUser: any) {
        return await this.repository.createQueryBuilder("contratoffre")
            .leftJoinAndSelect('contratoffre.user', 'user')
            .leftJoinAndSelect('contratoffre.packoffre', 'packoffre')
            .where('contratoffre.etat = :etat', { etat: true })
            .andWhere("contratoffre.user_id = :userId", { userId: idUser })
            .getMany()

    }

    public async updateContratOffre(idContrat: any, data: UpdateContratOffreDto) {
        return await this.repository.update(idContrat, data)
    }

    public async activeContratOffre(data: ActiveContratOffreDto) {
        return await this.repository.createQueryBuilder()
            .update(ContratOffre)
            .set({
                operation: data.operation,
                prixOffre: data.prixOffre,
            })
            .where("contratoffre.user_id = :idUser", { idUser: data.user_id })
            .andWhere('contratoffre.packoffre_id = :idPackOffre', { idPackOffre: data.packoffre_id })
            .andWhere('contratoffre.id = :idContrat', { idContrat: data.idContrat })
            .execute()
    }

    public async createContratOffre(idUser, data: CreateContratOffreDto) {
        data.user = idUser;
        return await this.repository.save({ ...data })
    }
}