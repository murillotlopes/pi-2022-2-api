import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { SensorClimatico } from "./SensorClimatico"

@Entity()
export class DadoClimatico {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: new Date().toISOString() })
    data_registro: Date

    @Column()
    precipitacao: number

    @Column()
    vasao: string

    @Column()
    nivel: number

    @Column()
    sensor_climatico_id: number

    @ManyToOne(() => SensorClimatico, (sensor) => sensor.id)
    sensor_id: number
}
