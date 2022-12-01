import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DadoClimatico } from "./DadoClimatico";

@Entity()
export class SensorClimatico {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  data_criacao?: Date;

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

  @OneToMany(type => DadoClimatico, (dadoClimatico) => dadoClimatico.sensor, { cascade: false })
  dados_climaticos: DadoClimatico[]
}