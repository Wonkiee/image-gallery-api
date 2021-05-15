/**
 * @author Rajitha Rajasooriya
 * @email [rajitharajasooriya@hotmail.com]
 * @create date 2021-05-15 15:09:12
 * @modify date 2021-05-15 15:09:12
 * @desc [User images DAO]
 */

const constants = require('../utils/constants');
const userImagesModel = require('./models/userImages');
const loggerModule = require('../services/loggerService');
const logger = new loggerModule().getLogger(constants.LOGGER_MODULE.SERVICE.DAO.USER_IMAGES);

class UerImagesDao {

  /**
   * Save user image details
   * @param  {Object} data - data to be stored
   * @param  {} callback - callback functio
   */
  insertUserImages(data, callback) {
    logger.info(`Saving the user Images for user: : ${data.userId}`);
    return userImagesModel.create(data, (err, docs) => {
      if (err) {
        logger.error(`Error in creating userImages record for user: ${data.userId}. Error: ${JSON.stringify(err)}`);
        return callback(err);
      }
      logger.info(`Successfully created the userImages record for user: ${data.userId}`);
      return callback(null, docs);
    });
  }

/**
 * Update user images by user id.
 *
 * @param {String} userId - user id
 * @param {String} data - data
 * @param {Function} callback - Callback function
 */
  updateUserImagesByUserId(userId, data, callback) {
    logger.info(`Updating the user Images for user: : ${userId}`);
    return userImagesModel.findOneAndUpdate({ userId: userId }, data, { upsert: true }, (err, doc) => {
      if (err) {
        logger.error(`Failed to update the user images for user: ${userId}: Error: ${JSON.stringify(err)}`);
        return callback(err);
      }
      logger.info(`Successfully updated the user images for user: ${userId}`);
      return callback(null, doc);
    });
  }

  /**
   * Retrieve user images by user id.
   *
   * @param {String} userId - User id
   * @param {Function} callback - Callback function
   */
  retrieveImageDetailsByUserId(userId, callback) {
    logger.info(`Retrieving user images for the user: ${userId}`);
    return userImagesModel.findOne({
      userId: userId
    }).exec((err, docs) => {
      if (err) {
        logger.error(`Error occurred in retrieving user images for user: ${userId}. Error: ${JSON.stringify(err)}`);
        return callback(err);
      }

      if (!docs) {
        logger.error(`No images found for the user: ${userId}`);
        return callback({
          code: constants.ERRORS.USER_NOT_FOUND
        });
      }
      logger.info(`Successfully retrieved the images for the user: ${userId}`);
      return callback(null, docs);
    });
  }
}

module.exports = new UerImagesDao();
