import React from 'react'

const ButtonArsip = ({id,onArsip}) => {
  return (
    <>
    <button onClick={() => onArsip(id)}>Arsip</button>
    </>
  )
}

export default ButtonArsip