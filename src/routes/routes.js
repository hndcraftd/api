import Router from "@koa/router";
import compose from "koa-compose";
import UserService from "../services/user.js";

const router = new Router();

// Services
const user = new UserService();

// health
router.get("", (ctx) => (ctx.body = "Bienvenue... 👋 😁"));

// User router
router.post("/users", user.create).get("/users/:id", user.read);

export function createRoutes() {
  return compose([router.routes(), router.allowedMethods()]);
}
