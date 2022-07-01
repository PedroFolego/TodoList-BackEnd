import { MSCTodo, Todo } from '../interfaces';

export default class TodoService implements MSCTodo {
  constructor(private model: MSCTodo) { }

  async get() {
    const list = await this.model.get();
    return list;
  }

  async put(value: Todo) {
    this.model.put(value);
  }

  async post(value: Todo) {
    this.model.post(value);
  }
  
  async delete(id: number) {
    this.model.delete(id);
  }
}