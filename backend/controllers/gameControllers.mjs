import Game from "../model/gameModel.mjs";

export const findGame = async (req, res) => {
  try {
    const response = await Game.findOne({ id: 1 });
    if (response) {
      return res.status(200).json({ message: "Game found" });
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
  const { buttonValue, id } = req.body;
  try {
    const response = await Game.findOneAndUpdate(
      { id: id },
      { $push: { buttons: buttonValue } },
      { new: true }
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
