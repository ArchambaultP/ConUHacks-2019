import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import SignupComponent from './SignupComponent';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <HeaderComponent />
      <Route path="/login" component={SignupComponent} />
      </div>

      </Router>
    );
  }
}

export default App;
