const express = require('express');
const router = express.Router();

const ImageFetchService = require('../app/services/imageFetchService');
const constants = require('../app/utils/constants');
const { handleWrapperResponse } = require('../app/utils/restUtils/responseBuilder');
const loggerModule = require('../app/services/loggerService');
const logger = new loggerModule().getLogger(constants.LOGGER_MODULE.SERVICE.ROUTES.USER_ROUTE);

router.get('/getUserImages', (req, res) => {
  logger.info("Request recieved to fetch images from image server");
  return ImageFetchService.fetchImagesList()
    .then(response => {
      handleWrapperResponse(res, response.data.entries, constants.RESPONSE_CODES.SUCCESS.SUCCESS);
    })
    .catch(err => {
      handleWrapperResponse(res, err, constants.RESPONSE_CODES.ERROR.INTERNAL_SERVER_ERROR);
    })
});

router.get('/getUserImages/:id', (req, res) => {
  logger.info("Request recieved to fetch images from image server");
  if (!req.params.id) {
    logger.error("User id not provided");
    return handleWrapperResponse(res, constants.ERRORS.USER_ID_NOT_PROVIDED,
      constants.RESPONSE_CODES.ERROR.BAD_REQUEST);
  }
  return ImageFetchService.retrieveImageDetailsByUserId(req.params.id, (err, response) => {
    if (err) {
      return handleWrapperResponse(res, err, constants.RESPONSE_CODES.ERROR.INTERNAL_SERVER_ERROR);
    }
    return handleWrapperResponse(res, response.images, constants.RESPONSE_CODES.SUCCESS.SUCCESS);
  })
});


router.post('/saveUserImages', (req, res) => {
  logger.info("Request recieved to save user images");
  req.body.userId = "testUser1";
  return ImageFetchService.saveUserImages(req.body, (err, response) => {
    if (err) {
      return handleWrapperResponse(res, err, constants.RESPONSE_CODES.ERROR.INTERNAL_SERVER_ERROR);
    }
    return handleWrapperResponse(res, response, constants.RESPONSE_CODES.SUCCESS.SUCCESS);
  });
});


router.patch('/updateUserImages', (req, res) => {
  logger.info("Request recieved to update user images");
  const reqBody = req.body;
  if (!reqBody.userId) {
    logger.error("User id not provided");
    return handleWrapperResponse(res, constants.ERRORS.USER_ID_NOT_PROVIDED,
      constants.RESPONSE_CODES.ERROR.BAD_REQUEST);
  }
  return ImageFetchService.updateImageDetailsForAUser(reqBody.userId, req.body, (err, response) => {
    if (err) {
      return handleWrapperResponse(res, err, constants.RESPONSE_CODES.ERROR.INTERNAL_SERVER_ERROR);
    }
    return handleWrapperResponse(res, response, constants.RESPONSE_CODES.SUCCESS.NO_CONTENT);
  });
});

module.exports = router;
