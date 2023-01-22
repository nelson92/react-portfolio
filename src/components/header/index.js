import React, { useState } from 'react';
import Navigation from "../navigation";


function Header(props) {
    const { currentPage, setCurrentPage } = props;

   
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
			<div>
				<h2>Richard Nelson's Portfolio</h2>
			</div>
			<div>
				<Navigation
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				></Navigation>
			</div>
		</header>


    );
};

export default Header;