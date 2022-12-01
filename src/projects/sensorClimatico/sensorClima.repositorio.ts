import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
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
    return await this.rep.findOneBy({ ...payload })
  }

  atualizarEquipamento = async (sensorId: number, entidade: QueryDeepPartialEntity<SensorClimatico>) => {
    return await this.rep.update(sensorId, entidade)
  }

  listar = async () => {
    return await this.rep.find()
  }

  filtrarPorEquipamento = async (parametros: object) => {
    return this.rep.find({ ...parametros })
  }
}

export default new SensorClimaRepositorio()