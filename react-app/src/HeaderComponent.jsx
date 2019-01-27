import React from 'react'
import { MenuItem, NavItem, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import SignupComponent from './SignupComponent';

class HeaderComponent extends React.Component {
    
    constructor(props)
    {
        super(props);

        this.state = {
            signup : false
        }
    }

    render() {

        return (
            <div>
            <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Fruit Trader</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem >
        <Link to="/login">Log In</Link>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
        );  
    }
  }

  export default HeaderComponent;