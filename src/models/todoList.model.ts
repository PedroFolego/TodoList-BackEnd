// import { Pool } from 'mysql2/promise';
import { Pool } from 'mysql2/promise';
import { MSCTodo, Todo } from '../interfaces';

export default class TodoModel implements MSCTodo {
  constructor(private connection: Pool) { }

  async get() {
    const [list] = await this.connection.execute('SELECT * FROM TodoList.List;');
    return list as Todo[];
  }

  async put(value: Todo) {
    const { id, todo, status, criado } = value;
    await this.connection.execute(
      `UPDATE TodoList.List
      SET todo = ?, status = ?, criado = ?
      WHERE id = ?`,
      [todo, status, criado, id],
    );
  }

  async post(value: Todo) {
    const { todo, status, criado } = value;
    await this.connection.execute(
      `INSERT INTO TodoList.List (todo, status, criado)
      VALUES (?, ?, ?)`,
      [todo, status, criado],
    );
  }
  
  async delete(id: number) {
    await this.connection.execute(
      'DELETE FROM TodoList.List WHERE id = ?',
      [id],
    );
  }
}