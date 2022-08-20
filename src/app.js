const express = require("express");
const app = express();
const catsRouter = require("./routes/catsRouter");

app.use(express.json());
app.use("/cats", catsRouter);

module.exports = app;
