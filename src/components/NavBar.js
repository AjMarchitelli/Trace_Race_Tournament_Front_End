import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const NavBar = (props) => {
  if(props.currentUser.name) {
    return (
      <div>
        <Link to='/'> Home </Link>
        <Link to='/user'> My Profile </Link>
        <Link to='/logOut'> Log Out </Link>
      </div>
    )}  else {
    return (
      <div>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default NavBar