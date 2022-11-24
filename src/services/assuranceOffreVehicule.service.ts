import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CreateAssuranceOffreVehiculeDto from "../dtos/assuranceOffreVehicule/create.dto";
import UpdateAssuranceOffreVehiculeDto from "../dtos/assuranceOffreVehicule/update.dto";
import { AssuranceOffreVehicule } from "../entity/assurOffreVehicule.entity";


export class AssuranceOffreVehiculeService {
    private readonly repository: Repository<AssuranceOffreVehicule>

    constructor() {
        this.repository = AppDataSource.getRepository("AssuranceOffreVehicule")
    }

    public async loadAssuranceOffreVehicule(idOffreVehicule:any) {
        return await this.repository.createQueryBuilder("assuranceoffrevehicule")
                                    .leftJoinAndSelect("assuranceoffrevehicule.offreevehicule", "offreevehicule")
                                    .where("assuranceoffrevehicule.offreevehicule_id = :id", { id: idOffreVehicule })
                                    .getOne()
    }

    public async loadAllAssuranceOffreVehicule() {
        return await this.repository.createQueryBuilder("assuranceoffrevehicule")
                                    .leftJoinAndSelect("assuranceoffrevehicule.offreevehicule", "offreevehicule")
                                    .getMany()
    }

    public async updateAssuranceOffreVehicule(data: UpdateAssuranceOffreVehiculeDto) {
        return await this.repository.createQueryBuilder()
                                    .update(AssuranceOffreVehicule)
                                    .set({
                                        reponsabiliteCivileVehic: data.reponsabiliteCivileVehic,
                                        cascoPartielle: data.cascoPartielle,
                                        cascoColission: data.cascoColission,
                                        dommageParking: data.dommageParking,
                                        assistanceVehic: data.assistanceVehic,
                                        accidentVehic: data.accidentVehic,
                                        effetsPersonnels: data.effetsPersonnels,
                                    })
                                    .where("assuranceoffrevehicule.offrevehicule_id = :id", {id: data.offrevehicule.id})
                                    .execute()
    }

    public async createAssuranceOffreVehicule(data: CreateAssuranceOffreVehiculeDto) {
        return await this.repository.save({...data})
    }
}