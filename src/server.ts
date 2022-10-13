import { AppDataSource } from './data-source';
import { config } from "dotenv";
import app from './app';

config()

AppDataSource.initialize().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`API rodando na porta ${process.env.PORT} de localhost`)
    })
}).catch(error => {
    console.error(error)
})