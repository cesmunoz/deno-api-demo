import { Context, helpers } from "../deps.ts";

const getAll = (ctx: Context) => {
  ctx.response.body = "Hello World from posts";
};

const getById = (ctx: Context) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `Hello World from posts with id ${id}`;
};

export default {
  getAll,
  getById,
};
