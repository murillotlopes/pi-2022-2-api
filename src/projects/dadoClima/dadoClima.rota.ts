import { Router } from "express";

const dadoClimaRota = Router()

dadoClimaRota.get('/por-cidade/:cidade')
dadoClimaRota.get('/por-localizacao/:localizacao')
dadoClimaRota.post('/registrar/:sensor')

export default dadoClimaRota
