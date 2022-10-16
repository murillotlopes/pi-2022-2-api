import { AppDataSource } from './../../data-source';
import { Repository } from 'typeorm';
import { SensorClimatico } from '../../entities/SensorClimatico';

class SensorClimaRepositorio {
    private rep: Repository<SensorClimatico>
    constructor() {
        this.rep = AppDataSource.getRepository(SensorClimatico)
    }

    registrarSensorClimatico = async (payload: SensorClimatico) => {
        try {
            await this.rep.save(payload)
            return { status: 200, message: { message: 'Sensor registrado' } }
        } catch (error) {
            return { status: 500, message: { message: 'Falha interna do servidor' } }
        }
    }

    buscarSensor = async (payload: object) => {
        console.log(payload)
        return await this.rep.findOneBy({ ...payload })
    }
}

export default new SensorClimaRepositorio()