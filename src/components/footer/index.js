import React from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import './style.css';
import { BsStackOverflow } from "react-icons/bs";




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
          <a href="https://stackoverflow.com/users/21062358/richard-12">
            <BsStackOverflow />
          </a>
        </ul>
      </p>

  </footer>

  
    )

};

export default Footer;

