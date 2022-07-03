import { OkPacket, Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

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
  get(): Promise<RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader>,
  put(values: Todo): void,
  post(values: Todo): void,
  delete(id: number): void
}

export type HandlePool = Pick<Pool, 'execute'>;