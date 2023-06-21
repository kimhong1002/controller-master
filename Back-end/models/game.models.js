const mongoose = require("mongoose");

const { Schema } = mongoose;
const gameModel = new Schema({
  title: {
    type: String,
    require: [true, "title is require"],
  },
  genre: { type: String },
  developper: { type: String },
  isplay: { type: Boolean, default: false },
  img: { type: String },
});

module.exports = mongoose.model("Game", gameModel);
