import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { AssuranceOffreBatiment } from "./assurOffreBatiment.entity";
import { PackOffre } from "./packOffre.entity";

@Entity("offrebatiment")
export class OffreBatiment extends BaseModel  {
    
    @Column({type: "float"})
    valeurBatim: number

    @Column({type: "boolean"})
    toitBatim: Boolean

    @Column({type: "boolean"})
    chauffageBatim: Boolean

    @Column({type: "varchar"})
    typeHabitation: string

    @Column({type: "date"})
    anneeConstruct: Date

    @OneToMany(() => AssuranceOffreBatiment, (assuranceoffrebatiment) => assuranceoffrebatiment.offrebatiment)
    assuranceoffrebatiment: AssuranceOffreBatiment[]

    @ManyToOne(() => PackOffre)
    @JoinColumn({name:"packOffre_id"})
    packoffre: PackOffre
}