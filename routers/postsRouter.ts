import { Router } from "../deps.ts";
import { postController as controller } from "../controllers/index.ts";

const BASE_URL = "/posts";

const router = new Router();
router.get(BASE_URL, controller.getAll);
router.get(`${BASE_URL}/:id`, controller.getById);

export default router;
