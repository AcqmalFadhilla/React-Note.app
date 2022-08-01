import React, { Component } from 'react'

export class AddData extends Component {
    constructor(props) {
      super(props)

      this.state = { 
        title : "",
        body: "",
        titleChar: 50
      }
      this.onSubmitHandler = this.onSubmitHandler.bind(this);
      this.onTitleHandler = this.onTitleHandler.bind(this);
      this.onBodyHandler = this.onBodyHandler.bind(this);
    }

    onTitleHandler(e) {
        if(this.state.titleChar > 0) {
            this.setState((s) => {
                return{
                    title : e.target.value,
                    titleChar : s.titleChar -1
                }
            })
        }
    }

    onBodyHandler(e) {
        this.setState(() => {
            return{
                body : e.target.value
            }
        })
    }

    onSubmitHandler(e){
        e.preventDefault()
        this.props.addData(this.state)
        this.setState(() => {
            return {
                title: '',
                body: '',
                titleChar: 50
            }
        })
    }
  render() {
    return (
      <>
        <form action="" onSubmit={this.onSubmitHandler}>
            <label htmlFor="Title">Title</label>
            <input type="text" name="Title" placeholder='Title' value={this.state.title} onChange={this.onTitleHandler}/>
            <p>Sisah Character {this.state.titleChar}</p>
            <label htmlFor="Body">Body</label>
            <input type="text" name="Body" placeholder='Body'  value={this.state.body} onChange={this.onBodyHandler}/>
            <button type="submit">Add</button>
        </form>
      </>
    )
  }
}

export default AddData