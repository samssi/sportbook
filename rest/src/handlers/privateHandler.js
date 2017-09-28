const logger = require("bunyan").createLogger({name: "sportbook-rest-handlers-privateHandler"});
const router = require("express").Router();
const uuidv4 = require("uuid/v4");
const dateFormat = require("dateformat");
const runlogQueries = require("../queries/runlogQueries");
const connect = require("../dynamodb/dynamoDB").connect
const kmInMeters = require("../util/calculator").kmInMeters;

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
    if (err.name === "ResourceNotFoundException") {
        logger.error("Database down: " + err);
        res
            .status(503)
            .send(errorMessage("DatabaseDown"));
    } else if (err) {
        logger.error("InternalError: " + err);
        res
            .status(500)
            .send(errorMessage("InternalError"));
    } else {
        res
            .status(200)
            .send(data);
    }
}

const errorMessage = (message) => {
    return {
        err: {
            name: message
        }
    }
}

module.exports = router;