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
      <CenterContainer imgUrl="https://pbs.twimg.com/profile_images/1362784994188476420/om5lsyFF_400x400.png " alt= "image not defined"/>
      <header className="App-header">
        <title>Teste</title>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

