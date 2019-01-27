import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import SignupComponent from './SignupComponent';
import LoginComponent from './LoginComponent';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <HeaderComponent />
	<LoginComponent />
      <Route path="/login" component={SignupComponent} />
      </div>
      </Router>
    );
  }
}

export default App;
