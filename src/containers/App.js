import '../App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from './Home'
import User from '../components/User'
import Bracket from '../components/Bracket'
import Header from '../components/Header'
import LogOut from '../components/LogOut'

class App extends Component {

  state = {
    currentUser: {
      id: null,
      name: '',
      matchups: [],
      brackets: []
    }
  }

  logIn = (userObj) => {
    this.setState({
      currentUser: userObj
    })
    console.log(this.state)
  }

  logOut = () => {
    this.setState({
      currentUser: {
        id: null,
        name: '',
        matchups: [],
        brackets: []
      }
    })
  }

  getUser = () => {
    fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
    .then(response => response.json())
    .then(response => console.log(response))
  }

  setUserState = (userObj) => {
    this.setState({ currentUser: userObj})
  }

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div>
          <Header currentUser={this.state.currentUser}/>

          <NavBar currentUser={this.state.currentUser}/>

          <Route exact path='/' component={() => 
            <Home 
              logIn={this.logIn} 
              currentUser={this.state.currentUser}/>} />
              
          <Route exact path='/user' component={() => 
            <User 
              setUserState={this.setUserState}
              currentUser={this.state.currentUser}/>
          } />

          <Route exact path='/bracket' component={() => 
            <Bracket 
              currentUser={this.currentUser}/>} />

          <Route exact path='/logOut' component={() => 
            <LogOut 
              logOut={this.logOut} 
              currentUser={this.state.currentUser}/> } />
        </div>
      </Router>
    );
  }
}

export default App;
