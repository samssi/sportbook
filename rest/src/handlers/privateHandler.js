const logger = require("bunyan").createLogger({name: "sportbook-rest-handlers-privateHandler"});
const router = require("express").Router();
const uuidv4 = require("uuid/v4");
const dateFormat = require("dateformat");
const runlogQueries = require("../queries/runlogQueries");
const connect = require("../dynamodb/dynamoDB").connect


router.get("/runlog", (req, res) => {
    connect.query(runlogQueries.getRunlogByUsername("samssi"), (err, data) => returnData(err, data, res));
});

router.put("/runlog", (req, res) => {
    connect.putItem(runlogQueries.putRunlogItemForUsername("samssi"), (err, data) => returnData(err, data, res));
});

const returnData = (err, data, res) => {
    if (err) {
        logger.error(err);
        res.send("ERROR").status(500);
    }
    else {
        res.status(200).send(data);
    }
}

module.exports = router;