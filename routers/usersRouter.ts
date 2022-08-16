import { Router } from "../deps.ts";
import { TYPES } from "../constants.ts";
import diContainer from "../diContainer.ts";
import UsersController from "../controllers/users.controller.ts";

const BASE_URL = "/users";
const controller: UsersController = diContainer.resolve(TYPES.UsersController);

const router = new Router();
router.get(BASE_URL, controller.getAll);
router.get(`${BASE_URL}/:id`, controller.getById);
router.post(BASE_URL, controller.create);
router.put(`${BASE_URL}/:id`, controller.update);
router.delete(`${BASE_URL}/:id`, controller.remove);

export default router;
