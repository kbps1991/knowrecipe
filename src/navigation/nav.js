import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/logo.png'
import '../App.css';

const Nav = () => {
    const navStyle = {color:'black'};
    const imgStyle = {height:'10vh'};
    return (
          <nav>
            <ul className="nav-links">
                <Link to="/knowrecipe/home">
                <li>
                    <img style={imgStyle} src={logo} alt="logo"></img>
                </li>
                </Link>
                <Link style={navStyle} to="/knowrecipe/home">
                    <li>
                        Home
                    </li>
                </Link>
                <Link style={navStyle} to="/knowrecipe/services">
                    <li>
                    Nutrition Analysis
                    </li>
                </Link>
                <Link style={navStyle} to="/knowrecipe/about">
                    <li>
                        About Us
                    </li>
                </Link>
                <Link style={navStyle} to="/knowrecipe/contactus">
                    <li>
                        Contact Us
                    </li>
                </Link>
            </ul>
          </nav>
      )
} 

  export default Nav;
