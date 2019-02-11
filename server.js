const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const winston = require("winston");

const router = require("./router");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" })
  ]
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple()
  })
);

const server = http.Server(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "150mb" }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res, next) => {
  logger.log("info", req.url);
  next();
});

 // catch 404 and forwarding to error handler
/* app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
}); */

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.use('/', router);

const { PORT = 3000 } = process.env;
server.listen(PORT);
logger.log("info", `App started on port ${PORT}`, PORT);
