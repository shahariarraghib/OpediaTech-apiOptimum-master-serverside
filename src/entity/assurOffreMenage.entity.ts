import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { OffreMenage } from "./offreMenage.entity";

@Entity("assuranceoffremenage")
export class AssuranceOffreMenage extends BaseModel  {
    
    @Column({type: "boolean"})
    reponsabiliteCivileMen: Boolean
    
    @Column({type: "boolean"})
    conduireVehicule: Boolean
    
    @Column({type: "boolean"})
    locauxLoues: Boolean
    
    @Column({type: "boolean"})
    volSimple: Boolean
    
    @Column({type: "boolean"})
    brisGlaceMen: Boolean
    
    @Column({type: "boolean"})
    cascoMenage: Boolean
    
    @Column({type: "boolean"})
    cyberAssuranceMen: Boolean
    
    @ManyToOne(() => OffreMenage)
    @JoinColumn({name:"offreMenage_id"})
    offremenage: OffreMenage
}