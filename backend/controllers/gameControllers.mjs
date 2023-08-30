import Game from "../model/gameModel.mjs";

export const findGame = async (req, res) => {
  try {
    const response = await Game.findOne({ id: 1 });
    if (response) {
      return res.status(200).json({ message: response.buttons });
    }
    const newGame = new Game({
      id: 1,
    });
    await newGame.save();
    res.status(200).json({ message: "Game created" });
  } catch (err) {
    console.log(err);
  }
};

export const updateGame = async (req, res) => {
  const { buttonValue } = req.body;
  try {
    const response = await Game.findOneAndUpdate(
      { id: 1 },
      { $push: { buttons: buttonValue } },
      { new: true }
    );
    if (response) {
      return res.status(200).json({ message: response.buttons });
    }
    res.status(400).json({ message: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const clearGame = async (req, res) => {
  try {
    const response = await Game.findOneAndUpdate(
      { id: 1 },
      { $set: { buttons: [] } },
      { new: true }
    );
    if (response) {
      return res.status(200).json({ message: response.buttons });
    }
    res.status(400).json({ message: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateWinner = async (req, res) => {
  const { winner } = req.body;
  try {
    const response = await Game.findOneAndUpdate(
      { id: 1 },
      { winner: winner },
      { new: true }
    );
    if (response) {
      return res.status(200).json({ message: response.winner });
    }
    res.status(400).json({ message: "not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const findWinner = async (req, res) => {
  try {
    const response = await Game.findOne({ id: 1 });
    if (response) {
      return res.status(200).json({ message: response.winner });
    }
    const newGame = new Game({
      id: 1,
    });
    await newGame.save();
    res.status(200).json({ message: "Game created" });
  } catch (err) {
    console.log(err);
  }
};
