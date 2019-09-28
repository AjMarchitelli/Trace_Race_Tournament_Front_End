import React, { Component } from 'react'
import { Redirect } from 'react-router'

export default class User extends Component {

  state = {
    redirect: false
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to ='/bracket' />
    }    
  }

  onNewGameClick = () => {      
    this.setState({
      redirect: !this.state.redirect 
    })
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <h1> {this.props.currentUser.name} </h1>
        <button onClick={() => this.onNewGameClick()}>Start a new game should be button</button>
      </div>
    )
  }
}

//() => this.onNewGameClick