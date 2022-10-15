import { Express } from 'express'
import dadoClimaRota from './dadoClima/dadoClima.rota'
import sensorClimaRota from './sensorClimatico/sensorClima.rota'
import usuarioRota from './usuario/usuario.rota'

const registroRotas = (app: Express): void => {
    app.use('/usuario', usuarioRota)
    app.use('/sensor-climatico', sensorClimaRota)
    app.use('/dado-clima', dadoClimaRota)
}

export default registroRotas