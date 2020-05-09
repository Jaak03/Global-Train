const moment = require('moment');

const DIF = 60;

/**
 * Prints message only if the date given is with DIF hours of the current date.
 * @param {iso-date} date 
 */
function isRecent(date) {
  return moment(date).isSameOrAfter(moment().subtract(DIF, 'minute'));
}

module.exports = {
  isRecent,
};
