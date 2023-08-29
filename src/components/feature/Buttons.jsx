import React, { useState } from "react";
import Button from "./Button";

export default function Buttons() {
  const [buttons, setButtons] = useState(Array(9).fill(""));
  const [xTurn, setXTurn] = useState(true);

  function handleClick(i) {
    const buttonsCopy = buttons.slice();
    if (xTurn) {
      buttonsCopy[i] = "X";
    } else {
      buttonsCopy[i] = "O";
    }
    setXTurn(!xTurn);
    setButtons(buttonsCopy);
  }
  return (
    <>
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
