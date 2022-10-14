import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nome: string

    @Column({ unique: true })
    email: string

    @Column()
    senha: string

    @Column({ default: false })
    administrador: boolean

}