import express from "express";
import winston from "winston";

const app = express();
const port = 3000;

const logger = winston.createLogger({
  level: "debug",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log" }),
  ],
});

// logger.info("info log example");
// logger.error("error log example");

app.get("/", (req, res) => {
  res.send("hello3 world");
});

app.listen(port, () => {
  console.log(`connected successfully on port ${port}`);
});
