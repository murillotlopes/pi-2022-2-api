import { AppDataSource } from './../../data-source';
import { Repository } from 'typeorm';
import { DadoClimatico } from '../../entities/DadoClimatico';

class DadoClimaRepositorio {
  private rep: Repository<DadoClimatico>
  constructor() {
    this.rep = AppDataSource.getRepository(DadoClimatico)
  }

  registrar = async (entidade: DadoClimatico) => {
    return await this.rep.save(entidade)
  }
}

export default new DadoClimaRepositorio()