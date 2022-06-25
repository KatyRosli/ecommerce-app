import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
<Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="justify-content-start">
      <Nav.Link href="#search">Women</Nav.Link>
      <Nav.Link href="#likes">Men</Nav.Link>
      <Nav.Link href="#shoppingcart">Kids</Nav.Link>
      <Nav.Link href="#shoppingcart">Living</Nav.Link>
    </Nav>
    <Navbar.Brand href="#home">silverspoon</Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link href="#search"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
      <Nav.Link href="#likes"><FontAwesomeIcon icon={faHeart} /></Nav.Link>
      <Nav.Link href="#shoppingcart"><FontAwesomeIcon icon={faBagShopping} /></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)
}
  export default Header;