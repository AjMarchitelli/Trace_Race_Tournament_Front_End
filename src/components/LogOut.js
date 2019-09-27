import React, { Component } from 'react'
import { Redirect } from 'react-router'

export default class LogOut extends Component {
  
  render() {
    if(this.props.currentUser.name) {
      return <div> 
      Are You Sure You Want To 
      <button onClick={this.props.logOut}>Log Out</button>
      ?
      </div>
    } else {return <Redirect to ='/' />} //redirect
  }
}