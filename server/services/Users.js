const { db } = require("../data");
const { users } = require("../seeds");
const { v4: uuidV4 } = require("uuid");

module.exports = class UsersService {
  static pegaUmUsuario({ email, password }) {
    const [user] = db.get("users").filter({ email, password}).value();
    return user;
  }

  static criaUmToken({ email }) {
    const token = uuidV4();
    db.get("tokens").add({ email, token });
    return token
  }
};
