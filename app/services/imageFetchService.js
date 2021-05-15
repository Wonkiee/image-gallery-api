/**
 * @author Rajitha Rajasooriya
 * @email [rajitharajasooriya@hotmail.com]
 * @create date 2021-05-15 13:46:40
 * @modify date 2021-05-15 13:46:40
 * @desc [Image fetch service]
 */
const axios = require('axios');

const BaseService = require('./baseService');
const config = require('../configurations');
const constants = require('../utils/constants');
const HttpResponse = require('../utils/restUtils/httpResponse');
const userImageDao = require('../dao/userImagesDao');
const loggerModule = require('./loggerService');
const logger = new loggerModule().getLogger(constants.LOGGER_MODULE.SERVICE.SERVICES.FETCH_IMAGE_SERVICE);
const responseCodes = constants.RESPONSE_CODES;

class ImageFetchService extends BaseService {

    constructor() {
        super();
    }

    /**
     * Fetches all the images from the image server.
     *
     * @returns {*}
     */
    async fetchImagesList() {
        const imageServerUrl = config.image_server;
        logger.info(`Fetch images from image server: ${imageServerUrl}`);
        try {
            const response = await axios.get(imageServerUrl);
            logger.info(`Successfully fetched images from image server: ${imageServerUrl}, response: ${(JSON.stringify(response.data))}`);
            return new HttpResponse(response.data, responseCodes.SUCCESS.SUCCESS);
        } catch (err) {
            const errorMessege = 'Error while fetching images from image server';
            logger.error(`${errorMessege}: ${imageServerUrl} error: ${err}`);
            return new HttpResponse(err, responseCodes.ERROR.INTERNAL_SERVER_ERROR, errorMessege);
        }
    }

    /**
     * Saves the user images data in db.
     * @param  {String} data - data
     * @param  {Function} callback - calback function
     */
    saveUserImages(data, callback) {
        logger.info(`Save images selection for a user: ${data.userId}`);
        userImageDao.insertUserImages(data, (err, res) => {
            if (err) {
                logger.error(`Error when saving user images for user: ${data.userId}. Error: ${err}`);
                return callback(err);
            }
            logger.info(`Successfully saved user images for user: ${data.userId}`);
            return callback(null, res);
        });
    }

    /**
     * Updates the user images data in db.
     * @param  {String} userId - userId
     * @param  {String} data - data
     * @param  {Function} callback - calback function
     */
    updateImageDetailsForAUser(userId, data, callback) {
        logger.info(`Updates the images selection of the user: ${userId}`);
        return userImageDao.updateUserImagesByUserId(userId, data, (err, res) => {
            if (err) {
                logger.error(`Error when updating user images for user: ${userId}. Error: ${err}`);
                return callback(err);
            }
            logger.info(`Successfully updated the user images for user: ${userId}`);
            return callback(null, res);
        });
    }

    /**
     * Retrieves the user images data from db for an user.
     * @param  {String} userId - userId
     * @param  {Function} callback - calback function
     */
    retrieveImageDetailsByUserId(userId, callback) {
        logger.info(`Retrieves the images selection of the user: ${userId}`);
        userImageDao.retrieveImageDetailsByUserId(userId, (err, res) => {
            if (err) {
                logger.error(`Error when retrieving user images for user: ${userId}:. Error: ${JSON.stringify(err)}`);
                return callback(err);
            }
            logger.info(`Successfully retrieved the user images for user: ${userId}`);
            return callback(null, res);
        });
    }
}

module.exports = new ImageFetchService();
