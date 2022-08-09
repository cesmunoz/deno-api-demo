import { TYPES } from "../constants.ts";
import { Context, helpers, Inject, Injectable } from "../deps.ts";
import TodosService from "../services/todos.service.ts";

@Injectable()
export class TodosController {
  constructor(@Inject(TYPES.TodosService) private service: TodosService) {}

  getAll = async (ctx: Context) => {
    ctx.response.body = await this.service.getAll(null);
  };

  getById = async (ctx: Context) => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    ctx.response.body = await this.service.getById(id);
  };

  create = (ctx: Context) => {
    const result = this.service.create({
      id: "1",
      title: "todo task",
      description: "this is a description",
      completed: false,
      dueDate: new Date(),
    });
    ctx.response.body = result;
  };

  update = async (ctx: Context) => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    await this.service.update({
      id,
      title: "todo task",
      description: "this is a description",
      completed: false,
      dueDate: new Date(),
    });

    ctx.response.body = id;
  };

  remove = async (ctx: Context) => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    await this.service.remove(id);
    ctx.response.body = id;
  };
}

export default TodosController;
