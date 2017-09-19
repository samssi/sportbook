const bunyan = require("bunyan").createLogger({name: "sportbook-rest-handler-errorHandler"});

function errorHandler(err, req, res, next) {
    logger.error(err, "Internal server error");
    res.status(500).send("Internal server error");
}

module.exports = errorHandler;