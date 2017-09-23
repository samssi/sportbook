const logger = require("bunyan").createLogger({name: "sportbook-rest-server"});

const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

// Handlers
const privateHandler = require("./handlers/privateHandler");
const errorHandler = require("./handlers/errorHandler")

const app = express();
const router = express.Router();
const apiVersion = "/api/v1/";

// Setup middleware
router.all("*", cors());
app.use(router);
app.use(helmet());
app.use(bodyParser.json());

// Setup routes
// TODO: add health-check route
// TODO: add security handler
app.use(apiPath("private"), privateHandler);
app.use(errorHandler);


const port = 8090;
app.listen(port, () => logger.info("Server started at port: " + port));

function apiPath(url) {
    const apiPath = apiVersion + url;
    logger.info("Loading api path: " + apiPath) 
    return apiPath; 
}

module.exports = app;