import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
} from 'react-bootstrap';
import Main from '../Router/Main';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <BrowserRouter>
        <div style={{position:'absolute'}}>
            <Navbar collapseOnSelect expand="lg" bg="position">
                <Navbar.Brand href= "/">Yuyang Chen</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/aboutme">AboutMe</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item Link to="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item Link to="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item Link to="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item Link to="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link Link to="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} Link to="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Main />
        </div>
      </BrowserRouter>
    )
  }
}


export default NavBar;
