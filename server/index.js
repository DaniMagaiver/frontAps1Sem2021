const casual = require("casual");
const { User } = require("./models");

module.exports = () => {
  const data = { users: [] };
  for (let i = 0; i <= 10; i++) {
    data.users.push(new User({
        name: casual.full_name,
        email: casual.email,
        phone: casual.phone,
        birthDay: casual.date(),
        password: casual.password
    }));
  }
  return data;
};
