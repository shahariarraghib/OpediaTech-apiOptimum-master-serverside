import { User } from "../../entity/user.entity"

export default interface CreateMessageDto {
    contenuMsg: string
    statutMsg: Boolean
    user: User
    receiver: User
}