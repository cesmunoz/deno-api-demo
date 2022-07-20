import { oak } from "./deps.ts";
import routers from "./routers/index.ts";
const { Application } = oak;

export function buildRoutes(app: typeof Application) {
  routers.forEach((router) => {
    app.use(router.routes());
    app.use(router.allowedMethods());
  });
}
