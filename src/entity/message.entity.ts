import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne} from "typeorm";
import { User } from "./user.entity";

@Entity("message")
export class Message extends BaseModel  {
    
    @Column({type: "text"})
    contenuMsg: string

    @Column({type: "boolean"})
    statutMsg: Boolean

    @Column({type: "int"})
    receiver: User

    @ManyToOne(() => User)
    @JoinColumn({name:"user_id"})
    user: User
}