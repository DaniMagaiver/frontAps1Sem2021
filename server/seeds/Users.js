const { User } = require("../models");
const casual = require('casual');

module.exports = (quantities) => {
  const users = [];
  for (let i = 0; i <= quantities; i++) {
    users.push(
      new User({
        name: casual.full_name,
        email: casual.email,
        phone: casual.phone,
        birthDay: casual.date(),
        password: casual.password,
      })
    );
  }
  return users;
};
