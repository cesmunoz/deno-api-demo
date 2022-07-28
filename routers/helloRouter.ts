import { Router } from "../deps.ts";
import { helloController as controller } from "../controllers/index.ts";

const BASE_URL = "";

const router = new Router();

router.get(`${BASE_URL}/`, controller.helloWorld);
router.get(`${BASE_URL}/ping`, controller.ping);

export default router;
