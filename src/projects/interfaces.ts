import { Response } from 'express';
import { Request } from 'express';
// export interface IRepository<T> {
//     salvar: (entidade: Partial<T>) => Promise<T>
//     salvarMuitos: (entidade: Partial<T[]>) => Promise<T[]>
//     buscarUm: (entidade: object) => Promise<T>
//     buscarTodosPor: (entidade: object) => Promise<T[]>
//     buscarTodos: () => Promise<T>
// }

export interface IController {
    buscarTodos(req: Request, res: Response): any
    buscarUm(req: Request, res: Response): any
    buscarPorId(req: Request, res: Response): any
    salvar(req: Request, res: Response): any
    salvarLista(req: Request, res: Response): any
    atualizarId(req: Request, res: Response): any
    removerId(req: Request, res: Response): any
}

export default abstract class Controller<T> implements IController {
    abstract getServico(conexao: string): any
    constructor() { }
    buscarTodos: (req: Request, res: Response) => Promise<void>
    buscarUm: (req: Request, res: Response) => Promise<void>
    buscarPorId: (req: Request, res: Response) => Promise<void>
    salvar: (req: Request, res: Response) => Promise<void>
    salvarLista: (req: Request, res: Response) => Promise<void>
    atualizarId: (req: Request, res: Response) => Promise<void>
    removerId: (req: Request, res: Response) => Promise<void>
}

export interface IService<T> {
    buscarTodos(params: Object): Promise<T[]>
    buscarUm(params: Object): Promise<T>
    buscarPorId(params: Object): Promise<T>
    salvar(entidade: Object): Promise<T>
    salvarLista(lista: Object[]): Promise<T>
    atualizarId(id: number | string): Promise<T>
    removerId(id: number | string): Promise<T>
}

export declare abstract class Service<T> implements IService<T> {
    //constructor() { }
    buscarTodos(params: Object): Promise<T[]>
    buscarUm(params: Object): Promise<T>
    buscarPorId(params: Object): Promise<T>
    salvar(entidade: Object): Promise<T>
    salvarLista(lista: Object[]): Promise<T>
    atualizarId(id: number | string): Promise<T>
    removerId(id: number | string): Promise<T>
}



export interface IRepositorio<T> {
    buscarTodos(params: Object): Promise<T[]>
    buscarUm(params: Object): Promise<T>
    buscarPorId(params: Object): Promise<T>
    salvar(entidade: Object): Promise<T>
    salvarLista(lista: Object[]): Promise<T>
    atualizarId(id: number | string): Promise<T>
    removerId(id: number | string): Promise<T>
}

export declare abstract class Repositorio<T> implements IRepositorio<T> {
    //constructor() { }
    buscarTodos(params: Object): Promise<T[]>
    buscarUm(params: Object): Promise<T>
    buscarPorId(params: Object): Promise<T>
    salvar(entidade: Object): Promise<T>
    salvarLista(lista: Object[]): Promise<T>
    atualizarId(id: number | string): Promise<T>
    removerId(id: number | string): Promise<T>
}