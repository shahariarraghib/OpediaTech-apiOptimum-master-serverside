import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { AssuranceOffreMenage } from "./assurOffreMenage.entity";
import { PackOffre } from "./packOffre.entity";

@Entity("offremenage")
export class OffreMenage extends BaseModel  {
    
    @Column({type: "int"})
    nbrePiece: number

    @Column({type: "float"})
    inventMen: number

    @Column({type: "int"})
    nbreAdulte: number

    @Column({type: "int"})
    nbreEnfant: number

    @Column({type: "boolean"})
    proprietaire: Boolean

    @OneToMany(() => AssuranceOffreMenage, (assuroffremen) => assuroffremen.offremenage)
    assuroffremen: AssuranceOffreMenage[]

    @ManyToOne(() => PackOffre)
    @JoinColumn({name:"packOffre_id"})
    packoffre: PackOffre
}