/**
 * @author Rajitha Rajasooriya
 * @email [rajitharajasooriya@hotmail.com]
 * @create date 2021-05-15 12:29:58
 * @modify date 2021-05-15 12:29:58
 * @desc [Load configurations from config file]
 */

const _ = require('lodash');

const configFilePath = "/etc/image-gallery/image-gallery-api/";

const configuration = function () {
    let config;

    try {
        process.env["NODE_CONFIG_DIR"] = configFilePath;
        process.env["SUPPRESS_NO_CONFIG_WARNING"] = true;
        config = require("config");
        if (_.isEmpty(config)) {
            console.log('\033[91m', 'ERROR - PLEASE ADD THE CONFIG FILE IN THE CORRECT PATH');
            console.log('\033[91m', `CONFIG FILE NOT FOUND IN ${configFilePath}`);
            process.exit(1);
        }
        console.log('\033[92m', `CONFIG FILE EXISTS IN ${configFilePath}`);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
    return config;
};

module.exports = new configuration();
