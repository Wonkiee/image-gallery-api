/**
 * @author Rajitha Rajasooriya
 * @email [rajitharajasooriya@hotmail.com]
 * @create date 2021-05-15 16:13:13
 * @modify date 2021-05-15 16:13:13
 * @desc [Validation util methods]
 */

const constants = require('../constants')

/**
 * UserId validation
 * @param  {String} userId - userId
 * @param  {Object} res - http response to be sent.
 */
const userIdValidation = (userId, res) => {
  if (!userId) {
    return new Error(constants.ERRORS.USER_ID_NOT_PROVIDED);
  }
  return null;
};

module.exports = userIdValidation;
