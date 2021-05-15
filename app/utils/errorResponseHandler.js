/**
 * @author Rajitha Rajasooriya
 * @email [rajitharajasooriya@hotmail.com]
 * @create date 2021-05-15 11:58:42
 * @modify date 2021-05-15 11:58:42
 * @desc [Error response handler]
 */

const constants = require('./constants');

class ErrorResponseHandler {

    handleErrorResponse(res, err) {

        res.setHeader(constants.HTTP_HEADER.CONTENT_TYPE, constants.HTTP_HEADER.APPLICATION_JSON);
        if (err.code) {
            switch (err.code) {
                case constants.RESPONSE_CODES.ERROR.BAD_REQUEST:
                    return res.sendStatus(constants.RESPONSE_CODES.ERROR.BAD_REQUEST);

                case constants.RESPONSE_CODES.ERROR.NOT_FOUND:
                    return res.sendStatus(constants.RESPONSE_CODES.ERROR.NOT_FOUND);

                case constants.RESPONSE_CODES.ERROR.UNAUTHORISED:
                    return res.sendStatus(constants.RESPONSE_CODES.ERROR.UNAUTHORISED);

                case constants.RESPONSE_CODES.ERROR.TOKEN_EXPIRED:
                    return res.status(constants.RESPONSE_CODES.ERROR.UNAUTHORISED).json({
                        code: constants.RESPONSE_CODES.ERROR.TOKEN_EXPIRED,
                        desc: constants.RESPONSE_CODES.ERROR.TOKEN_EXPIRED_MSG
                    });

                case constants.RESPONSE_CODES.ERROR.TOKEN_MISMATCH:
                    return res.status(constants.RESPONSE_CODES.ERROR.UNAUTHORISED).json({
                        code: constants.RESPONSE_CODES.ERROR.TOKEN_MISMATCH,
                        desc: constants.RESPONSE_CODES.ERROR.TOKEN_MISMATCH_MSG
                    });

                case constants.RESPONSE_CODES.ERROR.USER_NOT_FOUND:
                    return res.status(constants.RESPONSE_CODES.ERROR.UNAUTHORISED).json({
                        code: constants.RESPONSE_CODES.ERROR.USER_NOT_FOUND,
                        desc: constants.RESPONSE_CODES.ERROR.USER_NOT_FOUND_MSG
                    });

                case constants.RESPONSE_CODES.ERROR.REQUIRED_FIELDS_MISSING:
                    return res.status(constants.RESPONSE_CODES.ERROR.BAD_REQUEST).json({
                        code: constants.RESPONSE_CODES.ERROR.REQUIRED_FIELDS_MISSING,
                        desc: constants.RESPONSE_CODES.ERROR.REQUIRED_FIELDS_MISSING_MSG
                    });

                case constants.RESPONSE_CODES.ERROR.USER_EXISTS:
                    return res.status(constants.RESPONSE_CODES.ERROR.UNAUTHORISED).json({
                        code: constants.RESPONSE_CODES.ERROR.USER_EXISTS,
                        desc: constants.RESPONSE_CODES.ERROR.USER_EXISTS_MSG
                    });

                case constants.RESPONSE_CODES.ERROR.EMAIL_SENDING_FAILURE:
                    return res.status(constants.RESPONSE_CODES.ERROR.BAD_REQUEST).json({
                        code: constants.RESPONSE_CODES.ERROR.EMAIL_SENDING_FAILURE,
                        desc: constants.RESPONSE_CODES.ERROR.EMAIL_SENDING_FAILURE_MSG
                    });

                case constants.RESPONSE_CODES.ERROR.ORDER_ITEM_ERROR:
                    return res.status(constants.RESPONSE_CODES.ERROR.BAD_REQUEST).json({
                        code: constants.RESPONSE_CODES.ERROR.ORDER_ITEM_ERROR,
                        desc: constants.RESPONSE_CODES.ERROR.ORDER_LIST_EMPTY_MSG
                    });

                case constants.RESPONSE_CODES.ERROR.RECORD_NOT_FOUND:
                    return res.status(constants.RESPONSE_CODES.ERROR.NOT_FOUND).json({
                        code: constants.RESPONSE_CODES.ERROR.RECORD_NOT_FOUND,
                        desc: constants.RESPONSE_CODES.ERROR.RECORD_NOT_FOUND_MSG
                    });

                default:
                    return res.sendStatus(constants.RESPONSE_CODES.ERROR.INTERNAL_SERVER_ERROR);
            }
        }
        return res.sendStatus(constants.RESPONSE_CODES.ERROR.INTERNAL_SERVER_ERROR);
    }
}

module.exports = new ErrorResponseHandler();
