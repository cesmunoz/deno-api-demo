import { Application, isHttpError, Status } from "./deps.ts";
import { buildRoutes } from "./utils.ts";

const app = new Application();

app.use(async (_ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      switch (err.status) {
        case Status.NotFound:
          //TODO: handle Not Found
          break;
        default:
          //TODO: handle Default
      }
    } else {
      throw err;
    }
  }
});

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`,
  );
});

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

buildRoutes(app);

await app.listen({ port: 8000 });
