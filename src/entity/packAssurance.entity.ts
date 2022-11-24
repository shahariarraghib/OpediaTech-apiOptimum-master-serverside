import BaseModel from "./base.entity";
import {Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { Compagnie } from "./compagnie.entity";
import { ContratAssurance } from "./contratAssurance.entity";

@Entity("packassurance")
export class PackAssurance extends BaseModel  {
    
    @Column({type: "varchar"})
    nomAssur: string

    @Column({type: "varchar"})
    lien: string

    @Column({type: "int"})
    indice: number

    @Column({ type: "varchar"})
    logoAssur: string

    @Column({type: "varchar"})
    mimeType:string

    @Column({type: "int"})
    size: number

    @ManyToOne(() => Compagnie)
    @JoinColumn({name:"compagnie_id"})
    compagnie: Compagnie

    @OneToMany(() => ContratAssurance, (contratassurance) => contratassurance.packassurance)
    contratassurance: ContratAssurance[]
}