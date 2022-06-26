import React from "react";

import Footer from 'react-bootstrap/Footer';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faInstagram, faTwitter, faYoutube);

const Footer = () => {
    return (
        <Container>
            <Footer className="Footer">
            <Nav.Link href="#instagram"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
            <Nav.Link href="#twitter"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
            <Nav.Link href="#facebook"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
            <Nav.Link href="#youtube"><FontAwesomeIcon icon={faYoutube} /></Nav.Link>
            <div> © 2022 MANGO All rights reserved </div>
            <Container>
            <Nav.Link href="#PolicyAndCookies">Privacy Policy and Cookies</Nav.Link>
            <div> | </div> 
            <Nav.Link href="#TermsAndConditions">Terms and Conditions</Nav.Link>
            </Container>
            </Footer>
        </Container>
        )
}
  export default Footer;