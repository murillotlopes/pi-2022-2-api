import { Request } from "express"
import { DadoClimatico } from "../../entities/DadoClimatico"
import SensorClimaRepositorio from "../sensorClimatico/sensorClima.repositorio"
import DadoClimaRepositorio from "./dadoClima.repositorio"

class DadoClimaServico {
    registrar = async (req: Request) => {
        const payload: DadoClimatico = req.body
        const sensorId = payload['sensor_id']
        try {
            if (await SensorClimaRepositorio.buscarId(sensorId)) {
                console.log('entrei')
                await DadoClimaRepositorio.registrar(payload)
                return { status: 200, message: { message: "Registrado" } }
            }
        } catch (error) {

            return { status: 500, message: { message: "Erro Interno do Servidor!" } }
        }

    }
}

export default new DadoClimaServico()