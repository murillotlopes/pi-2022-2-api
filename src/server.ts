import { AppDataSource } from './data-source';
import { config } from "dotenv";
import app from './app';

config()

AppDataSource.initialize().then(() => {
    console.log('Banco de dados conectado')
    const porta = +process.env.PORT | 3001
    app.listen(porta, () => {
        console.log(`API rodando na porta ${porta} de localhost`)
    })
}).catch(error => {
    console.error(error)
})