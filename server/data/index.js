const db = require("../seeds");
const jsonServer = require("json-server");
const router = jsonServer.router(db);

module.exports = router;