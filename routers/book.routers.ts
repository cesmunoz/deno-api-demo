import { oak } from "../deps.ts";
const { Router } = oak;

const BASE_URL = "/";

const router = new Router();
router.get(BASE_URL, (ctx) => {
  ctx.response.body = "Hello World";
});
router.get(`${BASE_URL}ping`, (ctx) => {
  ctx.response.body = "pong";
});

export default router;
