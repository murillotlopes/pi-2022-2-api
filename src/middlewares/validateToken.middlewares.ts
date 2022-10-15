import { Usuario } from './../entities/Usuario';
import { JwtPayload, verify, VerifyErrors } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

const validaToken = (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.headers.authorization?.split(' ')[1]

    if (!token) {
        return res.status(400).json({ message: "Token de autorização não encontrado" })
    }

    return verify(token, process.env.SECRET_KEY, (err: VerifyErrors, decoded: string | JwtPayload) => {
        if (err) {
            return res.status(400).json({ message: "Token de autorização inválido" })
        }

        req['decoded'] = decoded as Usuario

        return next()
    })
}

export default validaToken