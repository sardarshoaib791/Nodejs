const register = function (username) {
  console.log(`${username} has been registerd`);
};
const Login = function (username, password) {
  console.log(`username: ${username} password: ${password}`);
};

module.exports = {
  register,
  Login,
};
