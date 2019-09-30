import React, { Component } from 'react'

export default class SignInForm extends Component {

  state = {
    name: ''
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  submitHandle = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(
        data => {
        // eslint-disable-next-line array-callback-return
        data.filter(userObj => {
          if(userObj.name === this.state.name) {
            fetch(`http://localhost:3000/users/${userObj.id}`)
            .then(res => res.json())
            .then(data => this.props.logIn(data))
          }
        })
       })
    }

  
  render() {
    return <h2>
      Sign In
    {
      <form onSubmit={this.submitHandle}>
        <label>
          Name: 
          <input 
            onChange={this.onChange} 
            type='text' name='name' 
            value={this.state.name} />
        </label>
        <input type='submit' value='submit' />
      </form>
    }</h2> 
  }
}