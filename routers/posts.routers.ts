import { oak } from "../deps.ts";
const { Router } = oak;

const BASE_URL = "/posts";

const router = new Router();
router.get(BASE_URL, (ctx) => {
  ctx.response.body = "Hello World from posts";
});
router.get(`${BASE_URL}/:id`, (ctx) => {
  ctx.response.body = `Hello World from posts with id ${ctx.params.id}`;
});

export default router;
