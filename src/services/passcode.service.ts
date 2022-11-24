import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import UpdatePasscodeDto from "../dtos/passcode/update.dto";
import { Passcode } from "../entity/passcode.entity";

export class PasscodeService {

    private repository: Repository<Passcode>;

    constructor() {
        this.repository = AppDataSource.getRepository(Passcode);
    }

    public async createPasscode(emailUser, resetCode) {
        return await this.repository.save({
            emailUser: emailUser,
            code: resetCode,
            createdAt: new Date(),
            isValid: true
        })
    }

    public async generatePasscodeForUser() {
        let code = Math.random() * (1000000 - 100000) + 100000
        return Math.ceil(code);
    }
}