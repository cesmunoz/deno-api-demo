import type { Context } from "../deps.ts";

const helloWorld = (ctx: Context) => {
  ctx.response.body = "Hello World";
};

const ping = (ctx: Context) => {
  ctx.response.body = "pong";
};

export default {
  helloWorld,
  ping,
};
