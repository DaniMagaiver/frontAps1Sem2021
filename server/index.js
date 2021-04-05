const routes = require("./routes");
const router = require("./data");
const jsonServer = require("json-server");
const server = jsonServer.create();
const door = 3001;

server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Content-Type", "application/json");
  res.set("Access-Control-Allow-Origin", "http://localhost:4200");
  res.set("Access-Control-Allow-Credentials", true);
  next();
});

routes(server);

server.use(router);

server.listen(door, () => {
  console.log(`O Servidor JSON está rodando na porta ${door} ! (～￣▽￣)～`);
});
