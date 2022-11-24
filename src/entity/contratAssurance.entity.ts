import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne} from "typeorm";
import { User } from "./user.entity";
import { PackAssurance } from "./packAssurance.entity";

@Entity("contratassurance")
export class ContratAssurance extends BaseModel  {
    
    @Column({type: "text", nullable:true})
    signature: string

    @Column({type: "varchar", nullable:true})
    pdfContratAssurance: string

    @Column({type: "varchar"})
    operation: string

    @Column({type: "float"})
    prixAssur: number

    @Column({type: "date"})
    dateExpiration: Date

    @Column({type: "boolean"})
    etat: Boolean

    @ManyToOne(() => User)
    @JoinColumn({name:"user_id"})
    user: User

    @ManyToOne(() => PackAssurance)
    @JoinColumn({name:"packassurance_id"})
    packassurance: PackAssurance
}