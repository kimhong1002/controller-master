const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/gamestore")
    .then(() => {
      console.log("Connect database success")
    });

const port = process.env.PORT || 5000;
const Game = require("./models/game.models");
const bodyParser = require("body-parser");
const gameRouter = require("./routes/game.route")(Game);

const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", gameRouter);

app.get("/", (req, res) => {
  res.send("do an tin hoc");
});
app.server = app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
module.exports = app;
