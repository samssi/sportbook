const logger = require("bunyan").createLogger({name: "sportbook-rest-dynamodb-dynamodb"});
const AWS = require("aws-sdk");

const internalError = "InternalError";
const databaseConnectionError = "DatabaseConnectionError";

const connect = new AWS.DynamoDB(
    {
        apiVersion: "2012-08-10",
        endpoint: new AWS.Endpoint("http://localhost:8000"),
        region: "eu-west-1"
    }
);

const returnData = (err, data, res) => {
    if (err.name === "ResourceNotFoundException" || "NetworkingError") {
        logger.error(formatErrorMessage(databaseConnectionError, err));
        res
            .status(503)
            .send(errorMessage(databaseConnectionError));
    } else if (err) {
        logger.error(formatErrorMessage(internalError, err));
        res
            .status(500)
            .send(errorMessage(internalError));
    } else {
        res
            .status(200)
            .send(data);
    }
}

const formatErrorMessage = (topic, err) => {
    return topic + ": " + err.name + ":" + err.stack;
}

const errorMessage = (message) => {
    return {
        err: {
            name: message
        }
    }
}

module.exports = { connect, returnData, internalError, databaseConnectionError }