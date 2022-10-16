import { Usuario } from './../entities/Usuario';

class GlobalService {
    estadosBrasileiros() {
        return ['SP', 'MG']
    }

    httpStatus(status: number, message?: Object) {
        return { status, message: { message: message ? message : "Erro interno do servidor!" } }
    }

    removeSenha(usuario: Usuario) {
        const { senha, ...novoUsuario } = usuario
        return novoUsuario
    }
}


export default new GlobalService()