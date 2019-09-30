import React, { Component } from 'react'
import { Redirect } from 'react-router'
import DrawingList from '../containers/DrawingsList.js'

export default class User extends Component {

  state = {
    redirect: false
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to ='/whiteboard' />
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
        <button onClick={() => this.onNewGameClick()}>Start a new WhiteBoard</button>
        <br></br><br></br>
        My WhiteBoards: <DrawingList deleteDrawing={this.props.deleteDrawing} currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

//() => this.onNewGameClick