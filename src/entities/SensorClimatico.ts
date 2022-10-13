import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SensorClimatico {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome_equipamento: string

    @Column()
    logradouro: string

    @Column()
    numero: string

    @Column()
    bairro: string

    @Column()
    cidade: string

    @Column()
    uf: 'SP' | 'MG'

    @Column()
    cep: number

    @Column({ nullable: true })
    latitude?: string

    @Column({ nullable: true })
    longitude?: string
}