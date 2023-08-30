import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
  _id: 1,
  buttons: {
    type: Array,
  },
});

const Game = mongoose.model("game", gameSchema);

export default Game;
