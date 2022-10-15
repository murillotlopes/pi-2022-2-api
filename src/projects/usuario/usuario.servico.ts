import { hash } from "bcryptjs"
import { Request, Response } from "express"
import { sign } from "jsonwebtoken"
import usuarioRepositorio from "./usuario.repositorio"

interface ILogin {
  status: number,
  message: Object
}

class UsuarioServico {
  criarUsuario = async (req: Request,) => {
    let usuario = req.body
    usuario.senha = await hash(req.body.senha, 12)

    try {
      const user = await usuarioRepositorio.criarUsuario({ ...usuario })
    } catch (e) {
      return e
    }
  }

  loginUsuario = async (req: Request): Promise<ILogin> => {
    const payload = req.body
    const usuario = await usuarioRepositorio.buscarUsuario({ email: payload.email })

    if (!usuario) return { status: 401, message: { message: "Credenciais inválidas" } }

    if (!(await usuario.compareSenha(payload.senha))) {
      return { status: 401, message: { message: "Credenciais inválidas" } }
    }

    const { senha, ...usuarioSemSenha } = usuario

    const token: string = sign({ ...usuarioSemSenha }, process.env.SECRET_KEY, { expiresIn: process.env.EXPIRES_IN })

    return { status: 200, message: { token } }
  }

  atualizarUsuario = async (req: Request,) => {

  }

  buscarUsuario = async (req: Request,) => {

  }
}

export default new UsuarioServico()