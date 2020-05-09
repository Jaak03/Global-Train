const moment = require('moment');

const DIF = 24;

/**
 * Prints message only if the date given is with DIF hours of the current date.
 * @param {date} date 
 */
function isRecent() {
  return moment(process.env.logDate).isSameOrAfter(moment().subtract(DIF, 'hours'))
    && process.env.log === 'true';
}

module.exports = {
  isRecent,
};
