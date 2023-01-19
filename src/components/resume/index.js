import React from "react";
import './style.css';
import myResume from '../../assets/richard_resume_2023.pdf';


function Resume() {




  return (
    <div className="resume background">
    <h2>My Resume</h2>
    <p>Please find a downloadable resume <a href={myResume} download>
    here
    </a>
    </p>
    
    <h3>Development Experience</h3>
    
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>React</li>
    </ul>
</div>


  );

}

export default Resume;