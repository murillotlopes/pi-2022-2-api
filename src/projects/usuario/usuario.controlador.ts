import { Response } from 'express';
import { Request } from 'express';
import usuarioServico from './usuario.servico';

class UsuarioControlador {

  criarUsuario = async (req: Request, res: Response) => {
    const { status, message } = await usuarioServico.criarUsuario(req)
    return res.status(status).json(message)
  }

  loginUsuario = async (req: Request, res: Response) => {
    const { status, message } = await usuarioServico.loginUsuario(req)
    return res.status(status).json(message)
  }

  atualizarUsuario = async (req: Request, res: Response) => {
    const { status, message } = await usuarioServico.atualizarUsuario(req)
    return res.status(status).json(message)
  }

  buscarUsuario = async (req: Request, res: Response) => {
    const { status, message } = await usuarioServico.buscarUsuario(req)
    return res.status(status).json(message)
  }
}

export default new UsuarioControlador()