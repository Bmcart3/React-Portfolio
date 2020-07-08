import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Profile from "./components/pages/Profile";
import Portfolio from "./components/pages/Portfolio";





function App() {
  return(
  <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Profile} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/portfolio" component={Portfolio} />

    </div>
  </Router>
  );
}

export default App;
