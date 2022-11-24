import { Brackets, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CreateMessageDto from "../dtos/message/create.dto";
import { Message } from "../entity/message.entity";
import { User } from "../entity/user.entity";

export class MessageService {


    private readonly repository: Repository<Message>

    constructor() {
        this.repository = AppDataSource.getRepository("Message");
    }

    public async createMessage(idUser: any, data: CreateMessageDto) {
        data.user = idUser;
        return await this.repository.save({ ...data })
    }

    public async loadMessage(idUser: any, send_hour: any) {
        return await this.repository.createQueryBuilder("message")
            .leftJoinAndSelect("message.user", "users")
            .where("message.user_id = :id", { id: idUser })
            .andWhere("message.createdDatetime = :createdDatetime", { createdDatetime: send_hour })
            .getOne()
    }

    public async loadMessageUser(idUser: any, receiver: any) {
        return await this.repository.createQueryBuilder("message")
            .leftJoinAndSelect("message.user", "users")
            .where(
                new Brackets((req) => {
                    req.where("message.user_id = :id", { id: idUser })
                        .orWhere("message.receiver = :idreceiver", { idreceiver: idUser })
                })
            )
            .andWhere(
                new Brackets((req) => {
                    req.where("message.user_id = :idUsers", { idUsers: receiver })
                    .orWhere("message.receiver = :idreceivers", { idreceivers: receiver })
                })
            )
            .orderBy("message.createdDatetime")
            .getMany();
    }

    // public async loadMessageReceiver(idUser: any, receiver: any) {
    //     return await this.repository.createQueryBuilder("message")
    //         .leftJoinAndSelect("message.user", "users")
    //         .where("message.user_id = :id", { id: receiver })
    //         .andWhere("message.receiver = :idreceiver", { idreceiver: idUser })
    //         .orderBy("message.createdDatetime")
    //         .getMany()
    // }

    public async loadAllMessage() {
        return await this.repository.createQueryBuilder("message")
            .leftJoinAndSelect("message.user", "users")
            .getMany()
    }

    public async deleteMessage(idUser: any, send_hour: any) {
        let messageRemove = await this.repository.createQueryBuilder("message")
            .leftJoinAndSelect("message.user", "users")
            .where("message.user_id = :id", { id: idUser })
            .andWhere("message.createdDatetime = :createdDatetime", { createdDatetime: send_hour })
            .getOne();

        return await this.repository.remove(messageRemove);
    }
}
