import { AppDataSource } from './../data-source';
import { Repository } from "typeorm"
import { DadoClimatico } from "../entities/DadoClimatico"

export interface IRepository<T> {

    save: (entidade: Partial<T>) => Promise<T>
    findOne: (payload: object) => Promise<T>
    getAll: () => Promise<T>
}

class DadoClimaRepository implements IRepository<DadoClimatico> {
    private dadoClimaORM: Repository<DadoClimatico>

    save: (entidade: Partial<DadoClimatico>) => Promise<DadoClimatico>;
    findOne: (payload: object) => Promise<DadoClimatico>;
    getAll: () => Promise<DadoClimatico>;


    constructor() {
        this.dadoClimaORM = AppDataSource.getRepository(DadoClimatico)
    }



}

export default new DadoClimaRepository()