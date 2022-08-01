import React from 'react'
import ItemsBody from './ItemsBody'


const ListItem = ({data,onDelete,onArsip}) => {
  return (
    <div>
        
    {
        
       data.map((datas) => 
        (<ItemsBody key={datas.id} id={datas.id} archived={datas.archived} onDelete={onDelete} onArsip={onArsip} {...datas} />))
    }
    </div>
  )
}

export default ListItem