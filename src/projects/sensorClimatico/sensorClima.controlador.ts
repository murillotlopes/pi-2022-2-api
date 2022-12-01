import { Response } from 'express';
import { Request } from 'express';
import sensorClimaServico from './sensorClima.servico';

class SensorClimaControlador {
  registrarSensorClimatico = async (req: Request, res: Response) => {
    const { status, message } = await sensorClimaServico.registrarSensorClimatico(req)
    return res.status(status).json(message)
  }

  atualizarEquipamento = async (req: Request, res: Response) => {
    const { status, message } = await sensorClimaServico.atualizarEquipamento(req)
    return res.status(status).json(message)

  }

  listar = async (req: Request, res: Response) => {
    return res.status(200).json(await sensorClimaServico.listar())
  }

  filtrarPorEquipamento = async (req: Request, res: Response) => {
    return res.status(200).json(await sensorClimaServico.filtrarPorEquipamento(req))
  }
}

export default new SensorClimaControlador()