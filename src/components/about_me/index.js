import React from 'react';
import './style.css';
import pic from '../../assets/headshot.png';



function AboutMe() {

   return (
    <div className="text background">
      <h1>About Me</h1>
      <p className="text">System Analyst and Full Stack Web Development Student</p>
      <hr />
      <img className="my-pic" src={pic} alt="Richard Nelson"/> 
      <p className="text">
        I'm Richard and I'm currently a Systems Analyst at a Seattle-based health care start up. 
        I've got 7 years of experience of working at various positions at a tech company and have worked my way up from phone support to associate software developer.
      </p>
      
    </div>
   ) 
};

export default AboutMe;