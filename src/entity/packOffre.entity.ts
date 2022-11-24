import BaseModel from "./base.entity";
import {Column , Entity, OneToMany} from "typeorm";
import { OffreBatiment } from "./offreBatiment.entity";
import { OffreEbike } from "./offreEbike.entity";
import { OffreMenage } from "./offreMenage.entity";
import { OffreVehicule } from "./offreVehicule.entity";
import { AssuranceOffreAutre } from "./assurOffreAutre.entity";
import { ContratOffre } from "./contratOffre.entity";

@Entity("packoffre")
export class PackOffre extends BaseModel  {
    
    @Column({type: "varchar"})
    nomOffre: string

    @Column({type: "varchar"})
    logoOffre: string

    @Column({type: "varchar"})
    mimeType:string

    @Column({type: "int"})
    size: number

    @Column({type: "varchar"})
    lien: string

    @Column({type: "int", unique: true})
    indice: number

    @OneToMany(() => OffreBatiment, (offrebatiment) => offrebatiment.packoffre)
    offrebatiment: OffreBatiment[]

    @OneToMany(() => OffreEbike, (offreebike) => offreebike.packoffre)
    offreebike: OffreEbike[]

    @OneToMany(() => OffreMenage, (offremenage) => offremenage.packoffre)
    offremenage: OffreMenage[]

    @OneToMany(() => OffreVehicule, (offrevehic) => offrevehic.packoffre)
    offrevehic: OffreVehicule[]

    @OneToMany(() => AssuranceOffreAutre, (assuranceoffreautre) => assuranceoffreautre.packoffre)
    assuranceoffreautre: AssuranceOffreAutre[]

    @OneToMany(() => ContratOffre, (contratoffre) => contratoffre.packoffre)
    contratoffre: ContratOffre[]
}