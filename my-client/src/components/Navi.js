import React from 'react'
import logo from '../images/hi.jpg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function Navi() {
  return (
    <div>
       <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            SAI RAJ GOUD 
            
          </Navbar.Brand>
         </Container>
         <Nav className="justify-content-end" activeKey="/">
        <Nav.Item color='White'>
          
          <Nav.Link href="/Add">Add</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Add">Link</Nav.Link>
        </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Navi;