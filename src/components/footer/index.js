import React from 'react';

// TODO import icons from separate folder


function Footer() {
    
    return (
        <footer className="footer">
      <div className="content has-text-centered">
      <p>
          <strong>React Portfolio</strong> by {" "}
          <a href="https://github.com/nelson92" target="_blank" rel="noreferrer">
            Richard Nelson
            <img src={require("../../assets/ghlogo.png")}
						alt="GitHub"
						className="logo"></img>
          </a>
          
          <hr />
          <a href="https://www.linkedin.com/in/richardtnelson/"
            target="_blank" rel="noreferrer"> LinkedIn
            <img src={require("../../assets/lilogo.png")}
						alt="LinkedIn"
						className="logo"></img>
          </a>{" "}
         
          
        </p>
      </div>
    </footer>

  
    )

};

export default Footer;

