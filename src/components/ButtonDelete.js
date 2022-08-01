import React from 'react'

const ButtonDelete = ({id,onDelete}) => {
  return (
    <>
    <button onClick={() => onDelete(id)}>Delete</button>
    </>
  )
}

export default ButtonDelete 