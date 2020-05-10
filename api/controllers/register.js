const { log } = require('../utils/logger');

const UserModel = require('mongoose').model('User');

async function register(event) {
  log(event);
}

module.exports = {
  register,
};
