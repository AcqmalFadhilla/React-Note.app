import React from 'react'

const ButtonArsip = ({id,onArsip,archived}) => {
  return (
    <>
    <button className='style-button' onClick={() => onArsip(id)}>{ archived === false ? "archived" : "aktif"}</button>
    </>
  )
}

export default ButtonArsip