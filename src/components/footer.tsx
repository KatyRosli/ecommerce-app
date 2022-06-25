import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faInstagram, faTwitter, faYoutube);

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Nav className="justify-content-center">
            <Nav.Link href="#instagram"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
            <Nav.Link href="#twitter"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
            <Nav.Link href="#facebook"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
            <Nav.Link href="#youtube"><FontAwesomeIcon icon={faYoutube} /></Nav.Link>
            </Nav>
        </Container>
        </Navbar>
        )
}
  export default Footer;