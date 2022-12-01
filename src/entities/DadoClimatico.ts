import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm"
import { SensorClimatico } from "./SensorClimatico"

@Entity()
export class DadoClimatico {

  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  data_registro: Date

  @Column()
  precipitacao: number

  @Column()
  vasao: string

  @Column()
  nivel: number

  @ManyToOne(type => SensorClimatico, { nullable: false })
  @JoinColumn({ name: 'sensor_id' })
  sensor: SensorClimatico
}
