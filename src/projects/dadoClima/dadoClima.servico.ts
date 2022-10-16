import { Request } from "express"
import { DadoClimatico } from "../../entities/DadoClimatico"
import globalService from "../../util/globalService"
import sensorClimaRepositorio from "../sensorClimatico/sensorClima.repositorio"
import dadoClimaRepositorio from "./dadoClima.repositorio"

class DadoClimaServico {
  registrar = async (req: Request) => {
    try {
      const dado: DadoClimatico = req.body
      if (await sensorClimaRepositorio.buscarSensor({ id: dado.sensor })) {
        await dadoClimaRepositorio.registrar(dado)
        return globalService.httpStatus(200, "Registrado")
      }
      return globalService.httpStatus(400, 'Sensor informado não encontrado')
    } catch (error) {
      return globalService.httpStatus(500)
    }
  }
}

export default new DadoClimaServico()