import Koa from "koa";
import bodyParser from "koa-body";
import cors from "@koa/cors";
import { createRoutes as routes } from "./routes/index.js";
import { authenticate, errorHandler } from "./middleware/index.js";

const app = new Koa();

app
  .use(cors())
  .use(bodyParser())
  .use(errorHandler())
  .use(authenticate())
  .use(routes());

app.onerror = (e) => {
  console.error(e);
};

export default app;
