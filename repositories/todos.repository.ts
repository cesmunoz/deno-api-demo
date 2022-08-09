import { Injectable } from "../deps.ts";
import RepositoryBase from "./base/repositoryBase.ts";

@Injectable()
class TodosRepository extends RepositoryBase {
  constructor() {
    super("todos");
  }

  async getByName(todoName: string) {
    const result = await this.collection.find({ name: todoName });
    return result;
  }
}

export default TodosRepository;
