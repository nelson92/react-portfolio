import React from 'react';



function AboutMe() {

   return (
    <div className='center'>
      <h1>About Me</h1>
      <p className="content is-medium">System Analyst and Full Stack Web Development Student</p>
      <hr />
      {/* TODO add link to picture */}
      {/* <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Richard Nelson"/> */}
      <p className="content mt-4">
        I'm Richard and I'm currently a Systems Analyst at a Seattle-based health care start up. 
        I've got 7 years of experience of working at various positions at a tech company and have worked my way up from phone support to associate software developer.
      </p>
      
    </div>
   ) 
};

export default AboutMe;