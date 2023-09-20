import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import ThreeDPrintingService from './components/ThreeDPrintingService/ThreeDPrintingService';

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
          <Route exact path="/services">
            <Services />
          </Route>
          {/* Routes for individual service pages */}
          <Route path="/services/3d-printing">
            <ThreeDPrintingService />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
