'use strict';
const { hello } = require('./handlers/hello');

require('./config');
require('./models');

module.exports = {
  hello
};
