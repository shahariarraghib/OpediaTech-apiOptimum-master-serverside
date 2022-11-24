import { Column, Entity } from "typeorm"
import BaseModel from "./base.entity"

@Entity("passcode")
export class Passcode extends BaseModel {
    @Column({type: "varchar"})
    emailUser: string

    @Column({type: "int"})
    code: number

    @Column()
    createdAt:Date

    @Column({ type: 'boolean', default: true })
    isActive: boolean
}
