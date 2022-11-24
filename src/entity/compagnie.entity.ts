import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { PackAssurance } from "./packAssurance.entity";

@Entity("compagnie")
export class Compagnie extends BaseModel  {
    
    @Column({type: "varchar"})
    nomCompagnie: string

    @Column({type: "varchar"})
    logoCompagnie: string

    @Column({type: "varchar"})
    mimeType:string

    @Column({type: "int"})
    size: number

    @OneToMany(() => PackAssurance, (packassurance) => packassurance.compagnie)
    packassurance: PackAssurance[]
}