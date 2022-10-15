import { Router } from "express";
import dadoClimaControlador from "./dadoClima.controlador";

const dadoClimaRota = Router()

dadoClimaRota.post('/registrar', dadoClimaControlador.registrar)

export default dadoClimaRota
