import { Response } from 'express';
import { Request } from 'express';
import sensorClimaServico from './sensorClima.servico';

class SensorClimaControlador {
    registrarSensorClimatico = async (req: Request, res: Response) => {
        const { status, message } = await sensorClimaServico.registrarSensorClimatico(req)

        return res.status(status).json(message)
    }
}

export default new SensorClimaControlador()