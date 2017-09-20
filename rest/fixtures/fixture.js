const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");

const dynamoDB = new AWS.DynamoDB(
    {
        apiVersion: "2012-08-10",
        endpoint: new AWS.Endpoint("http://localhost:8000"),
        region: "eu-west-1"
    }
);

function readFileFromRelativePath(file) {
    const relativePath = path.relative(process.cwd(), file);
    return JSON.parse(fs.readFileSync(relativePath));
}

function createTables() {
    const runlog = readFileFromRelativePath("../dynamodb/runlog/tables/runlog.json");
    dynamoDB.createTable(runlog, (err, data) => {
        if (err) {
            console.log(err, err.stack);
        } 
        else {
            console.log(data);
        }
    });
}

createTables();