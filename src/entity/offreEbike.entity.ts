import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { AssuranceOffreEbike } from "./assurOffreEbike.entity";
import { PackOffre } from "./packOffre.entity";

@Entity("offreebike")
export class OffreEbike extends BaseModel  {
    
    @Column({type: "varchar"})
    marqueEbike: string

    @Column({type: "varchar"})
    modeleEbike: string

    @Column({type: "date"})
    anneeAcquisition: Date

    @Column({type: "float"})
    prixEbike: number

    @OneToMany(() => AssuranceOffreEbike, (assuroffreebike) => assuroffreebike.offreebike)
    assuroffreebike: AssuranceOffreEbike[]

    @ManyToOne(() => PackOffre)
    @JoinColumn({name:"packOffre_id"})
    packoffre: PackOffre
}