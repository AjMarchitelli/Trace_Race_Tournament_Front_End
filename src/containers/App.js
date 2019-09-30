import '../App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from './Home'
import User from '../components/User'
import WhiteBoard from '../components/WhiteBoard'
import Header from '../components/Header'
import LogOut from '../components/LogOut'
import { thisExpression } from '@babel/types';

class App extends Component {

  state = {
    currentUser: {
      id: null,
      name: '',
      drawings: []
    }
  }

  logIn = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }

  logOut = () => {
    this.setState({
      currentUser: {
        id: null,
        name: '',
        drawings: []
      }
    })
  }


  setUserState = (userObj) => {
    this.setState({ currentUser: userObj})
  }

  addDrawing = (drawingObj) => {
    const newList = [...this.state.currentUser.drawings]
    newList.unshift(drawingObj) 

    this.setState({
      currentUser: {
        ...this.state.currentUser,
        drawings: newList
      }
    });
  }

  deleteDrawing = (drawingId) => {
    const newList = this.state.currentUser.drawings.filter(drawing =>
      drawing.id !== drawingId)
    
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        drawings: newList
      }
    })
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
              deleteDrawing={this.deleteDrawing}
              currentUser={this.state.currentUser}/>
          } />

          <Route exact path='/whiteboard' component={() => 
            <WhiteBoard 
              addDrawing={this.addDrawing}
              currentUser={this.state.currentUser}/>} />

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
