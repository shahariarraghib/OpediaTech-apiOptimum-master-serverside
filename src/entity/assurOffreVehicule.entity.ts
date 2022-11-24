import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { OffreVehicule } from "./offreVehicule.entity";

@Entity("assuranceoffrevehicule")
export class AssuranceOffreVehicule extends BaseModel  {
    
    @Column({type: "boolean"})
    reponsabiliteCivileVehic: Boolean

    @Column({type: "boolean"})
    cascoPartielle: Boolean

    @Column({type: "boolean"})
    cascoColission: Boolean

    @Column({type: "boolean"})
    dommageParking: Boolean

    @Column({type: "boolean"})
    assistanceVehic: Boolean

    @Column({type: "boolean"})
    accidentVehic: Boolean

    @Column({type: "boolean"})
    effetsPersonnels: Boolean

    @ManyToOne(() => OffreVehicule)
    @JoinColumn({name:"offreVehicule_id"})
    offrevehicule: OffreVehicule
}