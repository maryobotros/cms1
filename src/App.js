import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          {/* Route for Home page */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* Route for Services page */}
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
