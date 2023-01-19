import React from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";



// TODO import icons from separate folder


function Footer() {
    
    return (
      <footer>
      <p className='react-icons'>
        <ul>
          <a href="https://github.com/nelson92">
            <VscGithubAlt />
            
          </a>
          <a href="https://www.linkedin.com/in/richardtnelson/">
                  <AiOutlineLinkedin />
          
          </a>
        </ul>
      </p>

  </footer>

  
    )

};

export default Footer;

