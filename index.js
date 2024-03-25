import express, { json } from "express";
import routes from "./src/routes.js";
const server = express();
const PORT = 3000;

server.use(json());

server.use(routes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
