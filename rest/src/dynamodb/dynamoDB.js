const logger = require("bunyan").createLogger({name: "sportbook-rest-dynamodb-dynamodb"});
const AWS = require("aws-sdk");

const connect = new AWS.DynamoDB(
    {
        apiVersion: "2012-08-10",
        endpoint: new AWS.Endpoint("http://localhost:8000"),
        region: "eu-west-1"
    }
);

module.exports = { connect }