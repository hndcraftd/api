import Router from "@koa/router";
import compose from "koa-compose";
import UserService from "../services/User.js";
import OrderService from "../services/Order.js";

const router = new Router();

// Services
const user = new UserService();
const order = new OrderService();

// health
router.get("", (ctx) => (ctx.body = "Bienvenue... 👋 😁"));

// User router
router.post("/users", user.create).get("/users/:id", user.read);

// Order routes
router.post("/order").get("/order").get("/order/:id");

export function createRoutes() {
  return compose([router.routes(), router.allowedMethods()]);
}
