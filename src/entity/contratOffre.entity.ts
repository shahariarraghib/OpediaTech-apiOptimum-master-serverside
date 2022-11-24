import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne} from "typeorm";
import { User } from "./user.entity";
import { PackOffre } from "./packOffre.entity";

@Entity("contratoffre")
export class ContratOffre extends BaseModel  {
    
    @Column({type: "varchar", nullable:true})
    pdfContratOffre: string

    @Column({type: "text", nullable:true})
    signature: string

    @Column({type: "varchar"})
    operation: string
    
    @Column({type: "float"})
    prixOffre: number
    
    @Column({type: "date"})
    dateExpiration: Date

    @Column({type: "boolean"})
    etat: Boolean

    @ManyToOne(() => User)
    @JoinColumn({name:"user_id"})
    user: User

    @ManyToOne(() => PackOffre)
    @JoinColumn({name:"packoffre_id"})
    packoffre: PackOffre
}