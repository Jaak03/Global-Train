const { log } = require('../utils/logger');

module.exports.hello = async (event) => {
  log('Calling hallo function.');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
}
