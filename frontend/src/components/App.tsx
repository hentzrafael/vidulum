import React from 'react';
import logo from '../img/logo.svg';
import '../styles/App.css';   
import '../styles/Navbar.css'
import Navbar from './Navbar';
import CenterContainer from './CenterContainer'
import Header from './Header/Header'

export default function App() {
  document.title = 'Portfolio React + Flask ';
  return (
    <div className="App">
      <Navbar />
      <CenterContainer imgUrl="https://pbs.twimg.com/profile_images/1362784994188476420/ " alt= "image not defined"/>
      
    </div>
  );
}

