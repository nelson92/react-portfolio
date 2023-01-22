import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <Navbar bg="light" variant="light">
			<Container>
			<Navbar.Brand >Richard Nelson's Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCurrentPage("AboutMe")}>About Me</Nav.Link>
            <Nav.Link onClick={() => setCurrentPage("Portfolio")}>Portfolio</Nav.Link>
            <Nav.Link onClick={() => setCurrentPage("Contact")}>Contact</Nav.Link>
			<Nav.Link onClick={() => setCurrentPage("Resume")}>Resume</Nav.Link>

          </Nav>
			</Container>
		</Navbar>

    );
}


export default Navigation;