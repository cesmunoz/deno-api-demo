import { Application } from "./deps.ts";
import routers from "./routers/index.ts";

export function buildRoutes(app: Application) {
  routers.forEach((router) => {
    app.use(router.routes());
    app.use(router.allowedMethods());
  });
}

