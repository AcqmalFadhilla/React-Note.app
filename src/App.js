import React, { Component } from 'react'
import AddData from './components/AddData'
import Body from './components/Body'
import SearchItems from './components/SearchItem';
import { Data} from './Data'

export class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       data : Data(),
       searchedNotes : [],
       searchTitle : '',
    }
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArsipHandler = this.onArsipHandler.bind(this);

  }

  onAddHandler({title, body}) {
    const date = new Date();
    this.setState((prevState) => {
      return {
        data:[
          ...prevState.data, {
            id: +date,
            title,
            body,
            createdAt: date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay(),
            archived: false,
            
          }
        ]
      };
    });
  }
  
  onSearchChangeHandler (event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchTitle : event.target.value
      }
    })
    this.onSearchHandler(event.target.value)
  }

  onSearchHandler(searchedTitle) {
    let searchedNotes = this.state.data.filter((datas) => 
    datas.title.toLowerCase().includes(searchedTitle.toLowerCase()));
    if (this.state.searchTitle.length >= 0) {
      this.setState ({searchedNotes: null});
      this.setState ({searchedNotes : searchedNotes});
    }else {
      this.setState ({searchedNotes: null});
      this.setState ({searchedNotes: this.state.data})
    }
  }

  onDeleteHandler(id) {
        const data = this.state.data.filter(datas => datas.id != id);
        this.setState({data});
        console.log(data)
      }

  onArsipHandler(id) {
        const arsip = this.state.data
              .filter((datas) => datas.id === id)
              .map((datas) => (datas.archived = !datas.archived))
              this.setState({arsip});

      console.log(arsip);
      }

  render() {
  
    
    return (
      <>
      <AddData addData={this.onAddHandler}/>
      <SearchItems searchTitle={this.state.searchTitle} onSearch={this.onSearchChangeHandler} />
      <Body searchedNotes={this.state.searchedNotes} searchedTitle={this.state.searchTitle} onDelete={this.onDeleteHandler} onArsip={this.onArsipHandler}/>
      </>
    )
  }
}

export default App