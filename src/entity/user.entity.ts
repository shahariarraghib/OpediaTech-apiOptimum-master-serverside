import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Unique } from "typeorm"
import BaseModel from "./base.entity"
import { ContratAssurance } from "./contratAssurance.entity"
import { ContratOffre } from "./contratOffre.entity"
import { Message } from "./message.entity"
import { TypeUser } from "./typeUser.entity"

@Entity("users")
@Unique('uniqueEmailUser', ['emailUser'])
@Unique('uniqueTelUser', ['telUser'])
export class User extends BaseModel{

    @Column({type: "varchar"})
    nomUser: string

    @Column({type: "varchar"})
    prenomUser: string

    @Column({type: "date"})
    birthdayUser: Date

    @Column({type: "varchar"})
    nationalityUser: string

    @Column({type: "varchar"})
    adrUser: string

    @Column({type: "varchar"})
    postalUser: string

    @Column({type: "varchar"})
    localityUser: string

    @Column({type: "varchar", nullable: true})
    codeCounsellor: string
 
    @Column({type: "varchar", unique: true})
    telUser: string
    
    @Column({type: "varchar", unique: true})
    emailUser: string

    @Column({type: "varchar"})
    passwordUser: string

    @Column({type: "varchar", nullable: true})
    photoUser: string

    @Column({type: "date", nullable: true})
    validiteAdresse: Date


    @ManyToOne(() => TypeUser)
    @JoinColumn({name:"typeUser_id"})
    typeusers: TypeUser

    @OneToMany(() => ContratOffre, (contratoffre) => contratoffre.user)
    contratoffre: ContratOffre[]

    @OneToMany(() => ContratAssurance, (contratassurance) => contratassurance.user)
    contratassurance: ContratAssurance[]

    @OneToMany(() => Message, (message) => message.user)
    message: Message[]
}
