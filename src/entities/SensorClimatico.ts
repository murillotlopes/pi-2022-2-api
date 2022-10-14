import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DadoClimatico } from "./DadoClimatico";

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

    @OneToMany(() => DadoClimatico, (dadoClimatico) => dadoClimatico.sensor_id)
    dados_climaticos: DadoClimatico[]
}