import React from 'react'
import ButtonArsip from './ButtonArsip'
import ButtonDelete from './ButtonDelete'

const ItemsBody = ({title,createdAt,body,onDelete,id,onArsip,archived}) => {
  return (
      <div className='style-card__itemBody'>
        <h3 className='style-title'>{title}</h3>
        <p className='style-created'>{createdAt}</p>
        <p className='style-text__body'>{body}</p>
        <ButtonDelete id={id} onDelete={onDelete}/>
        <ButtonArsip id={id} onArsip={onArsip} archived={archived}/>
    </div>
        
  
  )
}

export default ItemsBody