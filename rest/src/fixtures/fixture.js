const fs = require("fs");
const path = require("path");
const connect = require("../dynamodb/dynamoDB").connect

function readFileFromRelativePath(file) {
    const relativePath = path.relative(process.cwd(), file);
    return JSON.parse(fs.readFileSync(relativePath));
}

function createTables() {
    const runlog = readFileFromRelativePath("./dynamodb/runlog/tables/runlog.json");
    connect.createTable(runlog, (err, data) => readResponse(err, data));
}

function readResponse(err, data) {
    if (err) {
        console.log(err, err.stack);
    }
    else {
        console.log(data);
    }
}

createTables();