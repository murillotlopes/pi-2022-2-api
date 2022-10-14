import { Express } from 'express'


const registroRotas = (app: Express): void => {
    app.use('/usuario')
    app.use('/dado-clima')
    app.use('/sensor-climatico')
}

export default registroRotas