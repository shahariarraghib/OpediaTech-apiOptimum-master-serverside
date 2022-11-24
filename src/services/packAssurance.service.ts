import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import PackAssuranceAltDto from "../dtos/packAssurance/createMany.dto";
import PackAssuranceDto from "../dtos/packAssurance/createPackAssurance.dto";
import { PackAssurance } from "../entity/packAssurance.entity";

export class PackassuranceService {

	private readonly repository: Repository<PackAssurance>

	constructor() {
		this.repository = AppDataSource.getRepository(PackAssurance)
	}

	public async createPackAssurance(data: PackAssuranceDto) {
		return await this.repository.save({ ...data });
	}

	public async loadPackAssurance(data: any) {
		return await this.repository.createQueryBuilder("packassurance")
			.leftJoinAndSelect("packassurance.compagnie", "compagnie")
			.where("packassurance.nomAssur = :name", { name: data })
			.getMany()
	}

	public async loadCompaniesPackAssurance(idPack: any) {
		return await this.repository.createQueryBuilder("packassurance")
			.leftJoinAndSelect("packassurance.compagnie", "compagnie")
			.where("packassurance.id = :id", { id: idPack })
			.getOne()
	}


	public async createPackAssuranceAlt(data: any) {
		let mapedClass = null
		let save;
		data.compagnies_id.forEach(async company => {
			mapedClass = new PackAssuranceAltDto()
			mapedClass.compagnie.id = company
			mapedClass.logoAssur = data.logoAssur
			mapedClass.mimeType = data.mimeType
			mapedClass.nomAssur = data.nomAssur
			mapedClass.size = data.size
			save = await this.repository.save({ ...mapedClass })
		});
		return save
	}

	public async loadPackWithNameAssur() {
		return await this.repository.createQueryBuilder("packassurance")
			.groupBy("packassurance.nomAssur")
			.orderBy("packassurance.indice")
			.getMany()
	}
}

