const express = require("express");
const routes = require("./src/routes.js");

const server = express();
const PORT = 3000;

server.use(express.json());
server.use(routes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
