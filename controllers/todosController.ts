import { Context, helpers } from "../deps.ts";

const getAll = (ctx: Context) => {
  ctx.response.body = "Hello World from todos";
};

const getById = (ctx: Context) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `Hello World from todos with id ${id}`;
};

const create = (ctx: Context) => {
  ctx.response.body = "Create a todo";
};

const update = (ctx: Context) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `Update a todo with id ${id}`;
};

const remove = (ctx: Context) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `Remove a todo with id ${id}`;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
