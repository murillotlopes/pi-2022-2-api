import { Request } from 'express';
import { SensorClimatico } from '../../entities/SensorClimatico';
import globalService from '../../util/globalService';
import sensorClimaRepositorio from './sensorClima.repositorio';

class SensorClimaServico {
  registrarSensorClimatico = async (req: Request) => {
    try {
      const sensor: SensorClimatico = req.body
      await sensorClimaRepositorio.registrarSensorClimatico(sensor)
      return globalService.httpStatus(200, 'Sensor cadastrado')
    } catch (error) {
      return globalService.httpStatus(500)
    }
  }

  atualizarEquipamento = async (req: Request) => {
    try {
      const sensor: SensorClimatico = req.body
      await sensorClimaRepositorio.atualizarEquipamento(sensor.id, sensor)
      return globalService.httpStatus(200, 'Sensor atualizado')
    } catch (error) {
      return globalService.httpStatus(500)
    }
  }

  listar = async () => {
    try {
      return await sensorClimaRepositorio.listar()
    } catch (error) {
      return globalService.httpStatus(500)
    }
  }

  filtrarPorEquipamento = async (req: Request) => {
    try {
      return await sensorClimaRepositorio.filtrarPorEquipamento({ sensor_id: req.params.equipamento })
    } catch (error) {
      return globalService.httpStatus(500)
    }
  }
}

export default new SensorClimaServico()