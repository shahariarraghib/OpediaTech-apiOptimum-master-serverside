import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import UpdateUserDto from "../dtos/user/update.dto";
import { User } from "../entity/user.entity";

export class UserService {

    private readonly repository: Repository<User>

    constructor() {
        this.repository = AppDataSource.getRepository(User)
    }

    public async loadUser(authenticatedUser: any) {
        return await this.repository.createQueryBuilder("user")
            .leftJoinAndSelect("user.typeusers", "typeuser")
            .where("user.id = :id", { id: authenticatedUser.id })
            .getOne()
    }

    public async loadUserAll() {
        return await this.repository.createQueryBuilder("user")
            .leftJoinAndSelect("user.typeusers", "typeuser")
            .getMany()
    }

    public async loadUserByType(nameType) {
        return await this.repository.createQueryBuilder("user")
            .leftJoinAndSelect("user.typeusers", "typeuser")
            .where("typeuser.nomTypeUser = :name", { name: nameType})
            .getMany()
    }

    public async updateUser(authenticatedUser: any, updateData: UpdateUserDto) {
        return await this.repository.update(authenticatedUser.id, updateData)
    }

    

    public async updateProfilePhoto(authenticatedUser: any, data: any) {
        return await this.repository.createQueryBuilder()
            .update(User)
            .set({
                photoUser: data.photoUser
            })
            .where("users.id = :id", { id: authenticatedUser.id })
            .execute()
    }
}