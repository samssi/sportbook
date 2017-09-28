const logger = require("bunyan").createLogger({name: "sportbook-rest-handlers-privateHandler"});
const router = require("express").Router();
const uuidv4 = require("uuid/v4");
const dateFormat = require("dateformat");
const runlogQueries = require("../queries/runlogQueries");
const connect = require("../dynamodb/dynamoDB").connect
const kmInMeters = require("../util/calculator").kmInMeters;

const internalError = "InternalError";
const databaseConnectionError = "DatabaseConnectionError";

router.get("/runlog", (req, res) => {
    connect.query(runlogQueries.getRunlogByUsername("samssi"), (err, data) => returnData(err, data, res));
});

router.put("/runlog", (req, res) => {
    const payload = req.body;
    const meters = kmInMeters(payload.runInKm);
    console.log(meters);
    connect.putItem(runlogQueries.putRunlogItemForUsername("samssi", meters), (err, data) => returnData(err, data, res));
});

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

module.exports = router;