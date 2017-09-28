const logger = require("bunyan").createLogger({name: "sportbook-rest-handler-errorHandler"});
const badRequest = require("../appErrors").badRequest;
const internalError = require("../appErrors").internalError;

function errorHandler(err, req, res, next) {
    if (err.name === "JsonSchemaValidation") {
        logger.error(err.message);
        res.status(400).send(badRequest);
    }
    else {
        logger.error(err, "Internal server error");
        res.status(500).send(internalError);
    }
}

module.exports = errorHandler;