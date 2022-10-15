import { Response } from 'express';
import { Request } from 'express';
import DadoClimaServico from './dadoClima.servico';

class DadoClimaControlador {
    registrar = async (req: Request, res: Response) => {
        const { status, message } = await DadoClimaServico.registrar(req)

        return res.status(status).json(message)
    }
}

export default new DadoClimaControlador()