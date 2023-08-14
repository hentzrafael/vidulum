import  React, {Component}  from 'react';
import '../styles/Navbar.css'
import Button from './Button';
import icon from '../img/home_icon.svg';

export default class Navbar extends Component {
    render() {
    return (
      <div className="navbar">
          <a href="/" className="navbar-icon"><img src={icon} alt="home" className="navbar-icon"/></a>
          </div>
      )
}}

