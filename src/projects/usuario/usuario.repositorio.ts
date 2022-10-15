import { Usuario } from './../../entities/Usuario';
import { Request } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"

class UsuarioRepositorio {
  private rep: Repository<Usuario>
  constructor() {
    this.rep = AppDataSource.getRepository(Usuario)
  }

  criarUsuario = async (req: Usuario) => {
    return await this.rep.save(req)
  }

  loginUsuario = async (req: Request,) => {

  }

  atualizarUsuario = async (req: Request,) => {

  }

  buscarUsuario = async (payload: object) => {
    return await this.rep.findOneBy({ ...payload })
  }
}

export default new UsuarioRepositorio()