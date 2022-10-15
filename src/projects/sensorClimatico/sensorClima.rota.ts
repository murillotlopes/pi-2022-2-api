import { Router } from 'express';
import { validaToken } from '../../middlewares';
import sensorClimaControlador from './sensorClima.controlador';

const sensorClimaRota = Router()

sensorClimaRota.post('/registrar-equipamento', validaToken, sensorClimaControlador.registrarSensorClimatico) // cadastro do equipamento
// sensorClimaRota.patch('/:equipamento', validaToken) // atualização dos dados do equipamento
// sensorClimaRota.get('/lista') // lista de equipamentos cadastrado
// sensorClimaRota.get('/:equipamento') // dados registrado sob um equipamento
// sensorClimaRota.get('/:equipamento/previsao-atual') // retorn previsão a partir dos dados coletados
// sensorClimaRota.get('/:equipamento/previsao-futura') // retorna previsão a partir de previsão de precipitação dos proximos dias
// sensorClimaRota.get('/por-cidade/:cidade') // retorna a media dos dados coletados de precipitação por cidade
// sensorClimaRota.get('/por-localizacao/:localizacao') // retorna os dados pelo nome / localização do equipamento 

export default sensorClimaRota
