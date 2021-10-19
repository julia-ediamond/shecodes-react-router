import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Nav from "./components/Nav";


function App() {
  return (
    <div id="root">
      <Router>
        <Nav />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
            <Route path="/contact">
              <Contact />
            </Route>
              <Route path="/">
                <HomePage />
              </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
