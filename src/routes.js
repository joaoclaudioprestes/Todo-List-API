const Router = require("express").Router;
const ControllerTodoList = require("./controller/ControllerTodoList");
const routes = Router();

routes.get("/", ControllerTodoList.read);
routes.post("/", ControllerTodoList.create);
routes.put("/", ControllerTodoList.update);
routes.delete("/", ControllerTodoList.delete);

module.exports = routes;
