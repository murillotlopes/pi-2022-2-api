import { Usuario } from './../../entities/Usuario';
import { hash } from "bcryptjs"
import { Request, Response } from "express"
import { sign } from "jsonwebtoken"
import usuarioRepositorio from "./usuario.repositorio"
import globalService from '../../util/globalService';

interface ILogin {
  status: number,
  message: Object
}

class UsuarioServico {
  criarUsuario = async (req: Request,) => {
    try {
      const usuario: Usuario = req.body
      const jaCadastrado = await usuarioRepositorio.buscarUsuario({ email: usuario.email })
      if (jaCadastrado) return globalService.httpStatus(400, 'E-mail já cadastrado!')
      usuario.senha = await hash(req.body.senha, 12)
      await usuarioRepositorio.criarUsuario({ ...usuario })
      return globalService.httpStatus(200, 'Usuário cadastrado')
    } catch (e) {
      return globalService.httpStatus(500)
    }
  }

  loginUsuario = async (req: Request): Promise<ILogin> => {
    try {
      const payload: Partial<Usuario> = req.body
      const usuario = await usuarioRepositorio.buscarUsuario({ email: payload.email })

      if (!usuario) return globalService.httpStatus(401, "Credenciais inválidas")

      if (!(await usuario.compareSenha(payload.senha)))
        return globalService.httpStatus(401, "Credenciais inválidas")

      const token: string = sign({ ...globalService.removeSenha(usuario) }, process.env.SECRET_KEY, { expiresIn: process.env.EXPIRES_IN })

      return globalService.httpStatus(200, token)

    } catch (error) {
      return globalService.httpStatus(500)
    }
  }

  atualizarUsuario = async (req: Request,) => {
    try {
      const usuario: Usuario = req.body
      const usuarioId = req.params.id
      if (usuario.senha) usuario.senha = await hash(usuario.senha, 12)
      await usuarioRepositorio.atualizarUsuario(usuarioId, usuario)
      return globalService.httpStatus(200, 'Usuário atualizado!')
    } catch (error) {
      return globalService.httpStatus(500)
    }
  }

  buscarUsuario = async (req: Request,) => {
    try {
      const usuarioId = req.params.id
      const usuario = await usuarioRepositorio.buscarUsuario({ id: usuarioId })
      return globalService.httpStatus(200, globalService.removeSenha(usuario))
    } catch (error) {
      return globalService.httpStatus(500)
    }
  }
}

export default new UsuarioServico()