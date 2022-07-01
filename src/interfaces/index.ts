export interface ErrorHandler extends Error {
  status: number,
}

export interface Todo {
  id: number,
  todo: string,
  status: 'pendente' | 'em andamento' | 'pronto',
  criado: string,
}

export interface MSCTodo {
  get(): Promise<Todo[]>,
  put(values: Todo): void,
  post(values: Todo): void,
  delete(id: number): void
}