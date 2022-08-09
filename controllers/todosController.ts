import { Context, helpers } from "../deps.ts";
import * as service from "../services/todosService.ts";

const getAll = async (ctx: Context) => {
  ctx.response.body = await service.getAll(null);
};

const getById = async (ctx: Context) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = await service.getById(id);
};

const create = (ctx: Context) => {
  const result = service.create({
    id: "1",
    title: "todo task",
    description: "this is a description",
    completed: false,
    dueDate: new Date(),
  });
  ctx.response.body = result;
};

const update = async (ctx: Context) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  const result = await service.update({
    id,
    title: "todo task",
    description: "this is a description",
    completed: false,
    dueDate: new Date(),
  });
  ctx.response.body = result;
};

const remove = async (ctx: Context) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  await service.remove(id);
  ctx.response.body = id;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
