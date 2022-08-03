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
      <div className='style-addData'>
        <div className='style-card__addData'>
        <h1 className='style-header'>NOTE</h1>
        <form action="" onSubmit={this.onSubmitHandler} className="style-form">
            <label className='style-text__sisah_char'>Sisah Character {this.state.titleChar}</label>
            <input className='style-input' type="text" name="Title" placeholder='Title' value={this.state.title} onChange={this.onTitleHandler} required/>
            <br />
            <textarea rows={10} cols={5} className='style-input__textarea' type="text" name="Body" placeholder='Body'  value={this.state.body} onChange={this.onBodyHandler} required/>
            <br />
            <button className='style-button__submit' type="submit">Add</button>
        </form>
        </div>
      </div>
    )
  }
}

export default AddData