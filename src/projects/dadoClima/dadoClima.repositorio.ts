import { AppDataSource } from './../../data-source';
import { Repository } from 'typeorm';
import { DadoClimatico } from '../../entities/DadoClimatico';

class DadoClimaRepositorio {
    private rep: Repository<DadoClimatico>

    constructor() {
        this.rep = AppDataSource.getRepository(DadoClimatico)
    }

    registrar = async (payload: DadoClimatico) => {
        console.log(payload)
        return await this.rep.save(payload)
    }
}

export default new DadoClimaRepositorio()