import React from 'react'

export default function Button({value, handleClick}) {
  return (
    <button onClick={handleClick}>{value}</button>
  )
}
