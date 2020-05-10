// SETTING UP APPLICATION ENVIRONMENT.
require('../config');

// UTILS
const { log, isRecent } = require('../utils/logger');

module.exports = {
  utils: {
    log,
    isRecent,
  }
};
