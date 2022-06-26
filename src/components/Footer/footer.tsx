import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ReactDOM from 'react-dom';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faInstagram, faTwitter, faYoutube);


const Footer = () => {
    return (
        <Container>
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item><Nav.Link href="#instagram"><FontAwesomeIcon icon={faInstagram} /></Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#twitter"><FontAwesomeIcon icon={faTwitter} /></Nav.Link></Nav.Item>    
        <Nav.Item><Nav.Link href="#facebook"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link></Nav.Item>   
        <Nav.Item><Nav.Link href="#youtube"><FontAwesomeIcon icon={faYoutube} /></Nav.Link></Nav.Item> 
        <Nav.Item>
        <div className="copyrights"> © 2022 silverspoon All rights reserved </div>
        <Nav.Link href="#PolicyAndCookies">Privacy Policy and Cookies |</Nav.Link>
        <Nav.Link href="#TermsAndConditions">Terms and Conditions</Nav.Link>
        </Nav.Item>
        </Nav>
        </Container>
        )
}
  export default Footer;