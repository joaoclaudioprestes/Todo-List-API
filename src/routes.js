const Router = require("express").Router;
const ControllerTodoList = require("./controller/ControllerTodoList");
const routes = Router();

routes.get("/", ControllerTodoList.read);
routes.post("/", ControllerTodoList.create);

module.exports = routes;
