import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { OffreEbike } from "./offreEbike.entity";

@Entity("assuranceoffreebike")
export class AssuranceOffreEbike extends BaseModel  {
    
    @Column({type: "boolean"})
    volEbike: Boolean
    
    @Column({type: "boolean"})
    deteriorationEbike: Boolean

    @Column({type: "boolean"})
    perteEbike: Boolean

    @Column({type: "boolean"})
    assistanceEbike: Boolean

    @ManyToOne(() => OffreEbike)
    @JoinColumn({name:"offreEbike_id"})
    offreebike: OffreEbike
}