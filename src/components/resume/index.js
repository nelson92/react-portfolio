import React from "react";
import './style.css';
import myResume from '../../assets/richard_resume_2023.pdf';


function Resume() {




  return (
    <div className="resume">
    <h2>Richard Nelson Resume</h2>
    <p>Note: Please find a downloadable resume <a href={myResume} className="download-logo" download>
    here
    </a>
    </p>
    <p>....description.... </p>
    <h3>Development Experience</h3>
    <p>...description...:</p>
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