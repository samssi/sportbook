const logger = require("bunyan").createLogger({name: "sportbook-rest-handlers-privateHandler"});
const router = require("express").Router();
const dateFormat = require("dateformat");
const validate = require("express-jsonschema").validate;
const schema = require("../schema/schema")
const runlogQueries = require("../queries/runlogQueries");
const connect = require("../dynamodb/dynamoDB").connect;
const kmInMeters = require("../util/calculator").kmInMeters;
const databaseConnectionError = require("../appErrors").databaseConnectionError;
const internalError = require("../appErrors").internalError;

router.get("/runlog", (req, res) => {
    connect.query(runlogQueries.getRunlogByUsername("samssi"), (err, data) => returnDatabaseData(err, data, res));
});

router.put("/runlog", validate({body: schema.runlog}), (req, res) => {
    const payload = req.body;
    const meters = kmInMeters(payload.runInKm);
    console.log(meters);
    connect.putItem(runlogQueries.putRunlogItemForUsername("samssi", meters), (err, data) => returnDatabaseData(err, data, res));
});

const returnDatabaseData = (err, data, res) => {
    if (err.name === ("ResourceNotFoundException" || err.name === "NetworkingError")) {
        logger.error(formatErrorMessage(databaseConnectionError, err));
        res
            .status(503)
            .send(databaseConnectionError);
    } else if (err) {
        logger.error(formatErrorMessage(internalError, err));
        res
            .status(500)
            .send(internalError);
    } else {
        // TODO: Add user and other data when token is implemented
        logger.info("Database query by user '<username_here>'");
        res
            .status(200)
            .send(data);
    }
}

const formatErrorMessage = (topic, err) => {
    return topic + ": " + err.name + ":" + err.stack;
}

module.exports = router;