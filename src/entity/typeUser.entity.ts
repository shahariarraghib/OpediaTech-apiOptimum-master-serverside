import BaseModel from "./base.entity";
import {Column , Entity, OneToMany} from "typeorm";
import { User } from "./user.entity";

@Entity("typeuser")
export class TypeUser extends BaseModel  {
    
    @Column({type: "varchar"})
    nomTypeUser: string

    @OneToMany(() => User, (user) => user.typeusers)
    user: User[]
}