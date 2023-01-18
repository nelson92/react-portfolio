import React from "react";


function Navigation(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav>
			<ul className="flex-row mobile-view">
				<li className={currentPage === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentPage("AboutMe")}>About Me</span>
				</li>
				<li className={currentPage === "portfolio" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentPage("Portfolio")}>Portfolio</span>
				</li>
				<li className={currentPage === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentPage("Contact")}>Contact</span>
				</li>
				<li className={currentPage === "resume" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentPage("Resume")}>Resume</span>
				</li>
			</ul>
		</nav>

    );
}


export default Navigation;