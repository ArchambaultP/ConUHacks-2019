import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import ListComponent from './ListingComponent';
import LoginComponent from './LoginComponent';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <HeaderComponent />
      <Route path="/login" component={LoginComponent} />
      <Route path="/listings" component={ListComponent} />
      </div>
      </Router>
    );
  }
}

export default App;
