import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { AssuranceOffreVehicule } from "./assurOffreVehicule.entity";
import { PackOffre } from "./packOffre.entity";

@Entity("offrevehicule")
export class OffreVehicule extends BaseModel  {
    
    @Column({type: "varchar"})
    marqueVehicle: string

    @Column({type: "varchar"})
    typeVehicle: string

    @Column({type: "date"})
    premierDateCirculation: Date

    @Column({type: "varchar"})
    receptionVehicle: string

    @Column({type: "float"})
    prixCatalog: number

    @Column({type: "varchar"})
    optionVehicle: string

    @Column({type: "float"})
    distanceAnnuel: number

    @OneToMany(() => AssuranceOffreVehicule, (assuroffrevehic) => assuroffrevehic.offrevehicule)
    assuroffrevehic: AssuranceOffreVehicule[]

    @ManyToOne(() => PackOffre)
    @JoinColumn({name:"packOffre_id"})
    packoffre: PackOffre
}