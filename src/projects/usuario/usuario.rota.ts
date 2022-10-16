import { Router } from 'express';
import { validaToken } from '../../middlewares'
import usuarioControlador from './usuario.controlador';

const usuarioRota = Router()

usuarioRota.post('/login', usuarioControlador.loginUsuario) // gera token
usuarioRota.post('/cadastro', usuarioControlador.criarUsuario) // cadastra usuário
usuarioRota.patch('/:id', validaToken, usuarioControlador.atualizarUsuario) // atualizar dados do usuário
usuarioRota.get('/:id', validaToken, usuarioControlador.buscarUsuario) // buscar dados do usuário

export default usuarioRota