import React from 'react';
import '../styles/App.css';   
import '../styles/Navbar.css'
import Portfolio from './Portfolio'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import CreatePage from './Pages/CreatePage';
import EditPage from './Pages/EditPage';
import AdminPage from './Pages/Admin';


export default function App() {
  document.title = 'Portfolio React + Flask ';
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={LandingPage}/>
        <Route path="/view">
          <Portfolio/>
        </Route>
        <Route path="/create">
          <CreatePage/>
        </Route>
        <Route path="/edit">
          <EditPage/>
        </Route>
        <Route path="/admin" component={AdminPage}/>
      </Router>

      {/* TODO: Arrumar a Navbar */}
      {/* <Navbar /> */}
      
    </div>
  );
}

