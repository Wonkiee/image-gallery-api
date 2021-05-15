/**
 * @author Rajitha Rajasooriya
 * @email [rajitharajasooriya@hotmail.com]
 * @create date 2021-05-15 12:00:36
 * @modify date 2021-05-15 12:00:36
 * @desc [DB connection creations]
 */

const mongoose = require('mongoose');

const config = require('../../configurations');
const dbConnectionStr = config.db.connection;
const constants = require('../../utils/constants');
const loggerModule = require('../../services/loggerService');
const logger = new loggerModule().getLogger(constants.LOGGER_MODULE.SERVICE.DB_CONNECTION);

mongoose.Promise = global.Promise;

class DbManager {

    /**
     * Initialize Mongo Database Connection
     */
    init() {
        return new Promise((resolve, reject) => {
            mongoose.connect(dbConnectionStr, {
                useCreateIndex: true,
                useFindAndModify: false,
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(() => {
                mongoose.set('objectIdGetter', false);
                mongoose.connection.on('connected', function () {
                    logger.info(`Mongoose default connection open to ' ${dbConnectionStr}`);
                });

                mongoose.connection.on('error', function (err) {
                    logger.error(`Mongoose connection error to ' ${dbConnectionStr} ' - '  ${err}`);
                });

                mongoose.connection.on('disconnected', function (err) {
                    logger.error(`Mongoose connection disconnected ' ${dbConnectionStr} ' - '  ${err}`);
                });
                return resolve(`Mongoose default connection open to ' ${dbConnectionStr}`);
            }).catch((error) => {
                logger.error(`Mongoose connection error: ${error}`);
                return reject(error);
            });
        });
    }
}

module.exports = new DbManager();
