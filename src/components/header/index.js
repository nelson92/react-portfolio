import React, { useState } from 'react';
import Navigation from "../navigation";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header(props) {
    const { currentPage, setCurrentPage } = props;

   
    return (
        <Navbar bg="light" variant="light">
        <Container>
				
			<div>
				<Navigation
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				></Navigation>
			</div>
			</Container>
		</Navbar>


    );
};

export default Header;