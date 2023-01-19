import React, { useState } from 'react';
import Navigation from "../navigation";


function Header(props) {
    const { currentPage, setCurrentPage } = props;

   
    return (
        <header>
			<div className="navbar navbar-expand-lg p-3">
				<h2>Richard's React Portfolio</h2>
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