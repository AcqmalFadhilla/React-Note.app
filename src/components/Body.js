import React from 'react'
import ListItem from './ListItem'

const Body = ({data,onDelete, onArsip, searchedNotes , searchedTitle}) => {
    let activeNotes = null;
    let archivedNotes = null;
    if (searchedTitle.length > 0) {
        activeNotes = searchedNotes.filter((datas) => datas.archived === false);
        archivedNotes = searchedNotes.filter((datas) => datas.archived === true);
    }else {
        activeNotes = data.filter((datas) => datas.archived === false);
        archivedNotes = data.filter((datas) => datas.archived === true);
    }

  return (
    <div>
        <h2>Active</h2>
          {activeNotes.length > 0 ?
           <div className='style-body'>
           <div className='style-body__itemBody'>
         <ListItem data={activeNotes} onDelete={onDelete} onArsip={onArsip}/> </div>
        </div> : <p className='style-text'>kosong</p>}
        <h2>Arsip</h2>
          {archivedNotes.length > 0 ?
            <div className='style-body'>
            <div className='style-body__itemBody'>
         <ListItem data={archivedNotes} onDelete={onDelete} onArsip={onArsip}/></div>
        </div> : <p className='style-text'>kosong</p>}
    </div>
  )
}

export default Body

