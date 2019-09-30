import React, { Component } from 'react'
import SignInForm from '../components/SignInForm.js'
import SignUpForm from '../components/SignUpForm.js'


export default class Home extends Component {



  render() {
    if (this.props.currentUser.name) {
      return (
        <div>
          Welcome {this.props.currentUser.name}!
        </div>
      )
    } else {
      return (
        <div>
        <SignInForm logIn={this.props.logIn} />
        <br></br><br></br>
        <SignUpForm logIn={this.props.logIn} />
        </div>
      )
    }
  
    //image

  }
}