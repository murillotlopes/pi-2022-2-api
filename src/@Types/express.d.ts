import { Usuario } from './../entities/Usuario';
declare global {
  namespace Express {
    interface Request {
      decoded: Usuario
    }
  }
}