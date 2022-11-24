import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { OffreBatiment } from "./offreBatiment.entity";

@Entity("assuranceoffrebatiment")
export class AssuranceOffreBatiment extends BaseModel  {
    
    @Column({type: "boolean"})
    responsabiliteCivileBatim: Boolean

    @Column({type: "boolean"})
    amenagementExt: Boolean

    @Column({type: "boolean"})
    panneauSolaire: Boolean

    @Column({type: "boolean"})
    trembleTerre: Boolean
  
    @Column({type: "boolean"})
    brisGlaceBatim: Boolean
  
    @Column({type: "boolean"})
    cascoBatiment: Boolean
  

    @ManyToOne(() => OffreBatiment)
    @JoinColumn({name:"offreBatiment_id"})
    offrebatiment: OffreBatiment
}