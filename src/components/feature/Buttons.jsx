import React, { useState } from "react";
import Button from "./Button";

export default function Buttons() {
  const [buttons, setButtons] = useState(Array(9).fill("x"))
  return (
    <>
      <div className="row">
        <Button value={buttons[0]}/>
        <Button value={buttons[1]}/>
        <Button value={buttons[2]}/>
      </div>
      <div className="row">
      <Button value={buttons[3]}/>
      <Button value={buttons[4]}/>
      <Button value={buttons[5]}/>
      </div>
      <div className="row">
      <Button value={buttons[6]}/>
      <Button value={buttons[7]}/>
      <Button value={buttons[8]}/>
      </div>
    </>
  );
}
