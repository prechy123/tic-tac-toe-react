import React, { useState } from "react";
import Button from "./Button";

export default function Buttons() {
  const [buttons, setButtons] = useState(Array(9).fill(""));
  const [xTurn, setXTurn] = useState(true);

  function handleClick(i) {
    const buttonsCopy = buttons.slice();
    if (buttonsCopy[i] || winner) {
      return;
    }
    if (xTurn) {
      buttonsCopy[i] = "X";
    } else {
      buttonsCopy[i] = "O";
    }
    setXTurn(!xTurn);
    setButtons(buttonsCopy);
  }
  const winner = calculateWinner(buttons);
  let status;
  if (winner) {
    status = "The winner is: " + winner;
  } else {
    status = "The next player is: " + (xTurn ? "X" : "O");
  }
  function calculateWinner(pieces) {
    const final = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < final.length; i++) {
      const [x, y, z] = final[i];
      if (pieces[x] && pieces[x] === pieces[y] && pieces[x] === pieces[z]) {
        return pieces[x];
      }
    }
    return;
  }
  return (
    <>
      <h2>{status}</h2>
      <div className="row">
        <Button value={buttons[0]} handleClick={() => handleClick(0)} />
        <Button value={buttons[1]} handleClick={() => handleClick(1)} />
        <Button value={buttons[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Button value={buttons[3]} handleClick={() => handleClick(3)} />
        <Button value={buttons[4]} handleClick={() => handleClick(4)} />
        <Button value={buttons[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Button value={buttons[6]} handleClick={() => handleClick(6)} />
        <Button value={buttons[7]} handleClick={() => handleClick(7)} />
        <Button value={buttons[8]} handleClick={() => handleClick(8)} />
      </div>
    </>
  );
}
