import React from "react";

export default function Button({ handleClick, value }) {
  return <button onClick={handleClick}>{value}</button>;
}
