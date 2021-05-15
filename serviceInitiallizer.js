/**
 * @author Rajitha Rajasooriya
 * @email [rajitharajasooriya@hotmail.com]
 * @create date 2021-05-15 13:36:30
 * @modify date 2021-05-15 13:36:30
 * @desc [Initiallize te services needed to run the application]
 */

const safeJsonStringify = require('safe-json-stringify');

const constants = require('./app/utils/constants');
const loggerModule = require('./app/services/loggerService');
const logger = new loggerModule().getLogger(constants.LOGGER_MODULE.SERVICE.SERVICE_INITIALLIZER);
const mongoDbManager = require('./app/dao/connections/connection');

class ServiceInitiallizer {

  /**
   * Initialize required services for application start
  */
  initServices() {
    return new Promise((resolve, reject) => {
      ServiceInitiallizer.initMongoDb()
        .then(resolve)
        .catch((err) => {
          return reject(safeJsonStringify(err));
        });
    });
  }

  /**
   * Initiallize mongoDB connection
   */
  static initMongoDb() {
    return new Promise((resolve, reject) => {
      mongoDbManager.init()
        .then(() => {
          logger.info('[MONGO DATABASE CONNECTION] Successfully Initialized Mongo Connection');
        })
        .then(resolve)
        .catch((err) => {
          return reject(`[MONGO DATABASE CONNECTION] Error in Connecting to Mongo Database: ${safeJsonStringify(err)}`);
        });
    });
  }
}

module.exports = new ServiceInitiallizer();
