import { TYPES } from "../constants.ts";
import { Inject, Injectable } from "../deps.ts";
import { Todo } from "../models/index.ts";
import TodosRepository from "../repositories/todos.repository.ts";

@Injectable()
class TodosService {
  constructor(
    @Inject(TYPES.TodosRepository) private repository: TodosRepository
  ) {}

  async getAll(filters: any) {
    const result = await this.repository.getAll(filters);
    return result;
  }

  async getById(id: string) {
    const result = await this.repository.getById(id);
    return result;
  }

  async create(model: Todo) {
    const result = await this.repository.create(model);
    return result;
  }

  async update(model: Todo) {
    await this.repository.update(model);
  }

  async remove(id: string) {
    await this.repository.remove(id);
  }
}

export default TodosService;
