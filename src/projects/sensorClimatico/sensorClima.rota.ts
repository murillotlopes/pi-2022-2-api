import { Router } from 'express';

const sensorClimaRota = Router()

sensorClimaRota.post('/registrar-equipamento')
sensorClimaRota.patch('/:equipamento')
sensorClimaRota.get('/lista')
sensorClimaRota.get('/:equipamento')

export default sensorClimaRota
