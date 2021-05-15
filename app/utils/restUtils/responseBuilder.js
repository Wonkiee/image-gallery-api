/**
 * @author Rajitha Rajasooriya
 * @email [rajitharajasooriya@hotmail.com]
 * @create date 2021-05-15 16:38:15
 * @modify date 2021-05-15 16:38:15
 * @desc [HTTP response builder]
 */

const constants = require('../constants');
/**
 * @param  {Object} response - HTTP response to be sent.
 * @param  {Object} responseData - Data to be sent.
 * @param  {String} responseCode - Response code
 */
const handleWrapperResponse = (response, responseData, responseCode) => {
    response.setHeader(constants.STRINGS.CONTENT_TYPE, constants.HTTP_HEADER.APPLICATION_JSON);
    response.status(responseCode).send(responseData);
};

module.exports = { handleWrapperResponse };
