import { Response } from 'express';
import { Request } from 'express';
import usuarioServico from './usuario.servico';

class UsuarioControlador {

  criarUsuario = async (req: Request, res: Response) => {
    const usuario = await usuarioServico.criarUsuario(req)

    return res.status(201).json(usuario)
  }

  loginUsuario = async (req: Request, res: Response) => {
    const { status, message } = await usuarioServico.loginUsuario(req)
    return res.status(status).json(message)
  }

  atualizarUsuario = async (req: Request, res: Response) => {

  }

  buscarUsuario = async (req: Request, res: Response) => {

  }
}

export default new UsuarioControlador()