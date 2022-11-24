import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { PackOffre } from "./packOffre.entity";

@Entity("assuranceoffreautre")
export class AssuranceOffreAutre extends BaseModel  {
    
    @Column({type: "boolean"})
    maladieLaMal: Boolean

    @Column({type: "boolean"})
    maladieCompl: Boolean

    @Column({type: "boolean"})
    voyage: Boolean

    @Column({type: "boolean"})
    protectionJuridiq: Boolean

    @Column({type: "boolean"})
    garantieLoyer: Boolean

    @Column({type: "boolean"})
    animaux: Boolean

    @ManyToOne(() => PackOffre)
    @JoinColumn({name:"packOffre_id"})
    packoffre: PackOffre
}