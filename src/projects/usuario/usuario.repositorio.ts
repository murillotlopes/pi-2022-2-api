import { Usuario } from './../../entities/Usuario';
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

class UsuarioRepositorio {
  private rep: Repository<Usuario>
  constructor() {
    this.rep = AppDataSource.getRepository(Usuario)
  }

  criarUsuario = async (entidade: Usuario) => {
    return await this.rep.save(entidade)
  }

  atualizarUsuario = async (usuarioId: string, entidade: QueryDeepPartialEntity<Usuario>) => {
    return await this.rep.update(usuarioId, entidade)
  }

  buscarUsuario = async (payload: object) => {
    return await this.rep.findOneBy({ ...payload })
  }
}

export default new UsuarioRepositorio()