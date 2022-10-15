import { Request } from 'express';
import { SensorClimatico } from '../../entities/SensorClimatico';
import SensorClimaRepositorio from './sensorClima.repositorio';

class SensorClimaServico {
    registrarSensorClimatico = async (req: Request) => {
        const sensor: SensorClimatico = req.body
        return await SensorClimaRepositorio.registrarSensorClimatico(sensor)
    }
}

export default new SensorClimaServico()