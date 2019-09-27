import React, { Component } from 'react'
import SignInForm from '../components/SignInForm.js'

export default class Home extends Component {

  render() {
    if (this.props.currentUser.name) {
      return (
        `Welcome ${this.props.currentUser.name}!` + ' ' + `my matchup id:  ${this.props.currentUser.matchups[0].id}`
      )
    } else {
      return (
        <div>
        <SignInForm logIn={this.props.logIn} />
        </div>
      )
    }
  
    //image
    //rules

  }
}