import React from 'react'
import ListItem from './ListItem'
import { Data } from '../Data';

const Body = ({ onDelete, onArsip, searchedNotes , searchedTitle}) => {
    const data = Data();
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
        <h2>Active</h2>{activeNotes.length > 0 ?
         <ListItem data={activeNotes} onDelete={onDelete} onArsip={onArsip}/> : <p>kosong</p>}
        <h2>Arsip</h2>
        {archivedNotes.length > 0 ?
         <ListItem data={archivedNotes} onDelete={onDelete} onArsip={onArsip}/> : <p>kosong</p>}
    </div>
  )
}

export default Body

// import React, { Component } from 'react'
// import ListItem from './ListItem'
// import { Data } from '../Data'

// export class Body extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          data : Data()
//       }
//       this.onDeleteHandler = this.onDeleteHandler.bind(this);
//       this.onArsipHandler = this.onArsipHandler.bind(this);
//       this.onSearchHandler = this.onSearchHandler.bind(this);
//     }

//     onDeleteHandler(id) {
//         const data = this.state.data.filter(datas => datas.id !== id);
//         this.setState({data});
//       }

//     onArsipHandler(id) {
//         const arsip = this.state.data
//               .filter((datas) => datas.id === id)
//               .map((datas) => (datas.archived = !datas.archived))
//               this.setState({arsip});
//       }
      
//       onSearchHandler(event) {
//         this.setState((prevState) => {
//           return {
//             ...prevState,
//             searchTitle: event.target.value
//           }
//         })
//       }
//   render() {
//     const activeNotes = this.state.data.filter((datas) => {
//         return datas.archived === false;
//       });
  
//       const archivedNotes = this.state.data.filter((datas) => {
//         return datas.archived === true;
//       });
//     return (
//       <>
//       <h2>Active</h2>
//       <ListItem data={activeNotes} onDelete={this.onDeleteHandler} onArsip={this.onArsipHandler}/>
//       <h2>Arsip</h2>
//       <ListItem data={archivedNotes} onDelete={this.onDeleteHandler} onArsip={this.onArsipHandler}/>
//       </>
//     )
//   }
// }

// export default Body