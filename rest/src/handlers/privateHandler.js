const logger = require("bunyan").createLogger({name: "sportbook-rest-handlers-privateHandler"});
const router = require("express").Router();
const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB(
    {
        apiVersion: "2012-08-10",
        endpoint: new AWS.Endpoint("http://localhost:8000"),
        region: "eu-west-1"
    });

router.get("/runlog", (req, res) => {
    dynamoDB.scan({"TableName": "runlog"}, (err, data) => returnData(err, data, res));
}
);

const returnData = (err, data, res) => {
    if (err) {
        logger.error(err);
        res.sendStatus(500);
    }
    else {
        res.status(200).send(data);
    }
}

module.exports = router;