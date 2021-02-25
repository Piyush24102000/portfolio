import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import {Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { render } from '@testing-library/react';
import "./styles.css";

class Navbars extends React.Component {
  render(){
    return ( <div>

    <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link href="#abc">abc</Nav.Link>
      <Nav.Link href="#xyz">xyz</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    
   
    </div>
    )
}
}
    export default Navbars; 


