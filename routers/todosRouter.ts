import { Router } from "../deps.ts";
import { todosController as controller } from "../controllers/index.ts";

const BASE_URL = "/todos";

const router = new Router();
router.get(BASE_URL, controller.getAll);
router.get(`${BASE_URL}/:id`, controller.getById);
router.post(BASE_URL, controller.create);
router.put(`${BASE_URL}/:id`, controller.update);
router.delete(`${BASE_URL}/:id`, controller.remove);

export default router;
