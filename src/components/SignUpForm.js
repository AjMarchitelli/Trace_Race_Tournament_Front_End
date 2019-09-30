import React, { Component } from 'react';

class SignUpForm extends Component {

  state = {
    name: ''
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  submitHandle = (e) => {
    e.preventDefault(); 

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({name: this.state.name})
    }).then(res => res.json())
      .then(data => {if(data.id){
        this.props.logIn(data)
      }})
  }

  render() {
    return <h2>
      Sign Up
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

export default SignUpForm;