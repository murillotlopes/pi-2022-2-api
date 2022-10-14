import { Router } from 'express';

const usuarioRota = Router()

usuarioRota.post('/login')
usuarioRota.post('/cadastro')
usuarioRota.patch('/:id')
usuarioRota.get('/:id')