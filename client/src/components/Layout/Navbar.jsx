import React, { Fragment } from "react"
import { Link } from "react-router-dom";



const Navbar = ({ title, icon }) => {

  const notLoggedinLinks = (
    <Fragment>
      <li> <Link to='/login'>Login</Link> </li>
      <li> <Link to='/signup'>Signup</Link> </li>
      <li> <Link to='/about'>About</Link> </li>
    </Fragment>
  )

  const loggedInUserLinks = (
    <Fragment>
    <li> <Link to='/song'> Songs </Link> </li>
    <li> <Link to='/signout'> Signout </Link> </li>
    </Fragment>
  )

  return (
    <div className="navbar bg-primary">
      <h1> <i className={icon} /> {title} </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li> <Link to='/login'>Login</Link> </li>
        <li> <Link to='/signup'>Signup</Link> </li>
        <li>Signout</li>
      </ul>
    </div>
  )
}

//passing in default props in functional components
Navbar.defaultProps = {
  title: 'Musical Lyric',
  icon: 'fab fa-napster'
}



export default Navbar
