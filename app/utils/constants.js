/**
 * @author Rajitha Rajasooriya
 * @email [rajitharajasooriya@hotmail.com]
 * @create date 2021-05-15 11:57:15
 * @modify date 2021-05-15 11:57:15
 * @desc [constants file]
 */

module.exports = {
    LOGGER_MODULE: {
        SERVICE: {
            SERVICE_INITIALLIZER: 'SERVICE INITIALLIZER',
            DB_CONNECTION: 'DATABASE CONNECTION',
            WWW: 'BIN/WWW',
            APP: 'APP',
            DAO: {
                USER_IMAGES: 'USER_IMAGES_DAO',
            },
            UTILS: {
                REST_UTIL: 'REST_UTIL'
            },
            SERVICES: {
                FETCH_IMAGE_SERVICE: 'USER FETCH_IMAGE_SERVICE',
            },
            ROUTES: {
                USER_ROUTE: 'USER_ROUTE'
            }
        },
        LOG_FILE_DATE_FORMAT: 'YYYY-MM-DD-HH',
        LOG_FILE_MAX_SIZE: '20m',
        MAX_FILES: '31d'
    },
    ERRORS: {
        USER_ID_NOT_PROVIDED: 'USER_ID_NOT_PROVIDED',
        USER_NOT_FOUND: 'USER_NOT_FOUND'
    },
    RESPONSE_CODES: {
        SUCCESS: {
            SUCCESS: 200,
            CREATED: 201,
            NO_CONTENT: 204,
        },
        ERROR: {
            BAD_REQUEST: 400,
            UNAUTHORISED: 401,
            ACCESS_DENIED: 401,
            FORBIDDEN: 403,
            NOT_FOUND: 404,
            GONE: 410,
            INTERNAL_SERVER_ERROR: 500,
            SERVICE_UNAVAILABLE: 503,

            //Custom Error Codes
            REQUIRED_FIELDS_MISSING: 100500,
            REQUIRED_FIELDS_MISSING_MSG: 'Required fields are missing',
            INCORRECT_CREDENTIALS: 100501,
            USER_EXISTS: 100502,
            USER_EXISTS_MSG: 'User exists',
            EMAIL_SENDING_FAILURE: 100503,
            EMAIL_SENDING_FAILURE_MSG: 'Email sending failure',
            USER_NOT_FOUND: 100504,
            USER_NOT_FOUND_MSG: 'User not found',
            TOKEN_MISMATCH: 100505,
            TOKEN_MISMATCH_MSG: 'Invalid token',
            TOKEN_EXPIRED: 100506,
            TOKEN_EXPIRED_MSG: 'Token expired',
            ORDER_ITEM_ERROR: 100507,
            ORDER_LIST_EMPTY_MSG: 'Required order detail is missing',
            RECORD_NOT_FOUND: 100508,
            RECORD_NOT_FOUND_MSG: 'Record not found'
        }
    },
    HTTP_HEADER: {
        APPLICATION_JSON: 'application/json',
        APPLICATION_PDF: 'application/pdf',
        APPLICATION_FROM_URLENCODED: 'application/x-www-form-urlencoded',
        CONTENT_TYPE: 'content-type',
        AUTHORIZATION: {
            BEARER: 'Bearer'
        }
    },
    STRINGS: {
        'CONTENT_TYPE': 'content-type',
        'BEARER_TOKEN': 'bearerToken',
        'ACCEPT': 'Accept',
        'CONTENT_DEPOSITION': 'Content-Disposition',
        'CONTENT_LENGTH': 'Content-Length'
    },
    CUSTOM_MESSEGES: {
        SERVER_STATUS: {
            RUNNING: 'RUNNING'
        }
    }
}
