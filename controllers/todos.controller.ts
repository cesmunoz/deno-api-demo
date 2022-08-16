import { TYPES } from "../constants.ts";
import { Context, helpers, Inject, Injectable } from "../deps.ts";
import { Todo } from "../models/index.ts";
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

  create = async (ctx: Context) => {
    const body = ctx.request.body();
    const bodyRequest = await body.value;

    const request = {
      ...bodyRequest,
      ...(bodyRequest.dueDate && { dueDate: new Date(bodyRequest.dueDate) }),
    };

    const model = Todo.parse(request);

    const result = this.service.create(model);
    ctx.response.body = result;
  };

  update = async (ctx: Context) => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });

    const body = ctx.request.body();
    const bodyRequest = await body.value;

    const request = {
      _id: id,
      ...bodyRequest,
      ...(bodyRequest.dueDate && { dueDate: new Date(bodyRequest.dueDate) }),
    };

    const model = Todo.parse(request);
    await this.service.update(model);
    ctx.response.body = model;
  };

  remove = async (ctx: Context) => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    await this.service.remove(id);
    ctx.response.body = id;
  };
}

export default TodosController;
