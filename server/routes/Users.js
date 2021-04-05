const { UsersController } = require("../controllers");

module.exports = (server) => {
    server.post("/users/login", UsersController.login);
};
