'use strict';

const { hello } = require('./handlers/hello');

// Connection to the database.
require('./config');
require('./models');

module.exports = {
  hello
};
