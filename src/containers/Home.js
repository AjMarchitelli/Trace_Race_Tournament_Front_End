import React, { Component } from 'react'
import SignInForm from '../components/SignInForm.js'
import SignUpForm from '../components/SignUpForm.js'


export default class Home extends Component {



  render() {
    if (this.props.currentUser.name) {
      return (
        <div>
          <h4>Welcome {this.props.currentUser.name}!</h4>
          <div className='coverImage'>
          <img src='/image/download.png'/>
          </div>
          <h4>Without access to a whiteboard, many engineers 
          are unable to effectively model out their applications.</h4>
          <h4>That ain't right!</h4>
          <h4>Domain Modeling is the key to creating awesome
          applications.</h4> 
          <h4>Here at DM5k we believe that all engineers
          deserve unlimited FREE access to their own domain modeling tool.</h4>
          <h4>Happy Modeling!</h4>
          <img src="https://media2.giphy.com/media/xT39D7GQo1m3LatZyU/giphy.gif?cid=790b761172dde0a6c930a2c9e4ec08edf308ca98614fd136&rid=giphy.gif"/>
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