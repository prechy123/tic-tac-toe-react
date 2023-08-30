import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";

export default function Buttons() {
  const [buttons, setButtons] = useState(Array(9).fill("-"));
  // const [oTurn, setOTurn] = useState(false);

  const handleClick = async (value) => {
    const response = await axios.post("/tictactoe", {
      buttonValue: value,
    });
    console.log(response.data.message)
  };
  // function handleClick(value) {
  //   const buttonsCopy = buttons.slice();
  //   if (buttonsCopy[value] !== "-" || calculateResult(buttons)) {
  //     return;
  //   }
  //   if (oTurn) {
  //     buttonsCopy[value] = "O";
  //   } else {
  //     buttonsCopy[value] = "X";
  //   }
  //   setButtons(buttonsCopy);
  //   setOTurn(!oTurn);
  // }
  // const result = calculateResult(buttons);
  // let status;
  // if (result) {
  //   status = "The winner is " + result;
  // } else {
  //   status = "Next player is " + (oTurn ? "O" : "X");
  // }

  // function calculateResult(pieces) {
  //   const correct = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < correct.length; i++) {
  //     const [x, y, z] = correct[i];
  //     if (pieces[x] !== "-") {
  //       if (pieces[x] && pieces[x] === pieces[y] && pieces[x] === pieces[z]) {
  //         return pieces[x];
  //       }
  //     }
  //   }
  //   return false;
  // }
  return (
    <>
      {/* <h1>{status}</h1> */}
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
      <button>Clear game</button>
    </>
  );
}
