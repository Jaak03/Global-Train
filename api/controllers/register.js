const { log } = require('../utils/logger');

const { UserSchema } = require('../models/schemas/user');
const UserModel = require('mongoose').model('User', UserSchema);

async function register(event) {
  log(event);
}

module.exports = {
  register,
};
