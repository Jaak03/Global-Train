'use strict';

const { hello } = require('./handlers/hello');
const { register } = require('./handlers/user');

// Connection to the database.
require('./config');
require('./models');

module.exports = {
  hello,
  register,
};
