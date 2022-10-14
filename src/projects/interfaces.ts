export interface IRepository<T> {
    salvar: (entidade: Partial<T>) => Promise<T>
    salvarMuitos: (entidade: Partial<T[]>) => Promise<T[]>
    buscarUm: (entidade: object) => Promise<T>
    buscarTodosPor: (entidade: object) => Promise<T[]>
    buscarTodos: () => Promise<T>
}