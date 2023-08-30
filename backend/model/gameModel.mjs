import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
  id: Number,
  buttons: [
    {
      type: Number,
    },
  ],
  winner: String,
});

const Game = mongoose.model("game", gameSchema);

export default Game;
