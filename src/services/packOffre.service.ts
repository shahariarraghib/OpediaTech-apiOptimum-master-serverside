import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import PackOffreDto from "../dtos/packOffre/create.dto";
import { PackOffre } from "../entity/packOffre.entity";


export class PackOffreService {

  private readonly repository: Repository<PackOffre>

  constructor() {
    this.repository = AppDataSource.getRepository(PackOffre)
  }

  public async createPackOffre(data: PackOffreDto) {
    return await this.repository.save({...data});
  }

  public async loadPackOffre() {
    return await this.repository.createQueryBuilder("packoffre")
		.orderBy("packoffre.indice")
		.getMany()
  }
  
  public async loadPackOffreByIndice(val:number) {
    return await this.repository.findOneBy({
      indice: val
    })
  }
}