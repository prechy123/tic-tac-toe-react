import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";

export default function Buttons() {
  const [buttons, setButtons] = useState(Array(9).fill("-"));
  const [xTurn, setXTurn] = useState(true);

  const getInitialButtons = async () => {
    const response = await axios("/tictactoe");
    console.log(response.data.message);
    const indices = response.data.message;
    const newButton = Array(9).fill("-");
    let turn = true;
    indices.forEach((index) => {
      newButton[index] = turn ? "X" : "O";
      turn = !turn;
    });

    setButtons(newButton);
  };
  useEffect(() => {
    getInitialButtons();
  }, []);

  function addButtons(messageLast) {
    const buttonsCopy = buttons.slice();
    if (buttonsCopy[messageLast] !== "-" || calculateResult(buttons)) {
      return;
    }
    if (xTurn) {
      buttonsCopy[messageLast] = "X";
    } else {
      buttonsCopy[messageLast] = "O";
    }
    setXTurn(!xTurn);
    setButtons(buttonsCopy);
  }

  const handleClick = async (value) => {
    const response = await axios.post("/tictactoe", {
      buttonValue: value,
    });
    console.log(response.data.message);
    const message = response.data.message;
    const messageLast = message[message.length - 1];
    addButtons(messageLast);
  };
  const clearGame = async () => {
    const response = await axios.post("/tictactoe/clear");
    console.log(response.data.message);
    setButtons(Array(9).fill("-"));
  };

  const calculateResult = (values) => {
    const correct = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < correct.length; i++) {
      const [x, y, z] = correct[i];
      if (values[x] !== "-") {
        if (values[x] && values[x] === values[y] && values[x] === values[z]) {
          return values[x];
        }
      }
    }
    return null;
  };

  const result = calculateResult(buttons);
  let status;
  if (result) {
    status = "The winner is " + result;
  } else {
    status = "Next player is " + (xTurn ? "X" : "O");
  }
  return (
    <>
      <h1>{status}</h1>
      <div>
        <Button value={buttons[0]} handleClick={() => handleClick(0)} />
        <Button value={buttons[1]} handleClick={() => handleClick(1)} />
        <Button value={buttons[2]} handleClick={() => handleClick(2)} />
      </div>
      <div>
        <Button value={buttons[3]} handleClick={() => handleClick(3)} />
        <Button value={buttons[4]} handleClick={() => handleClick(4)} />
        <Button value={buttons[5]} handleClick={() => handleClick(5)} />
      </div>
      <div>
        <Button value={buttons[6]} handleClick={() => handleClick(6)} />
        <Button value={buttons[7]} handleClick={() => handleClick(7)} />
        <Button value={buttons[8]} handleClick={() => handleClick(8)} />
      </div>
      <button onClick={clearGame}>Start Over</button>
    </>
  );
}
