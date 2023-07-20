import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import '../styles/Navbar.css';
import AdminPage from './Pages/Admin/Admin';
import CreatePage from './Pages/CreatePage/CreatePage';
import EditPage from './Pages/EditPage/EditPage';
import InformUser from './Pages/InformUser/InformUser';
import LandingPage from './Pages/LandingPage/LandingPage';
import Portfolio from './Pages/ViewPage/ViewPage';

export default function App() {
  document.title = 'Vidulum';
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&family=Tangerine:wght@400;700&display=swap" rel="stylesheet"/>

      <Router>
        <Route path="//" component={LandingPage}/>
        <Route path="/select-user" component={InformUser}/>
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

    </div>
  );
}

