import React from 'react'
import ButtonArsip from './ButtonArsip'
import ButtonDelete from './ButtonDelete'

const ItemsBody = ({title,createdAt,body,onDelete,id,onArsip}) => {
  return (
    <div>
        <h3>{title}</h3>
        <p>{createdAt}</p>
        <p>{body}</p>
        <ButtonDelete id={id} onDelete={onDelete}/>
        <ButtonArsip id={id} onArsip={onArsip}/>
    </div>
  )
}

export default ItemsBody