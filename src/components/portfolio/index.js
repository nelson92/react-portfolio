import React from 'react';
import Project from '../project';
import './style.css';


// TODO import images for projects

function Portfolio() {
    const projects = [
		{
			name: 'Note Taker',
			description:
				'This application can be used to write and save notes. It uses an Express.js back end and will save and retrieve note data from a JSON file.',
			image: 'note.taker.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express',
				'Heroku'
								
			],
			github: 'https://github.com/nelson92/11_note_taker',
			deployed: 'https://immense-hamlet-01384.herokuapp.com/',
		},
		{
			name: 'Progressive Web Application: Just Another Text Editor',
			description:
				'This application takes an existing text editor app and adds functionality for it to work as a PWA and function offline. This application is deployed through Heroku.',
			image: 'pwa.texteditor.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Heroku',
			],
			github: 'https://github.com/nelson92/pwa-text-editor',
			deployed: 'https://blooming-fjord-85558.herokuapp.com/',
		},
		{
			name: 'Raining Cats and Dogs',
			description:
				'Raining Cats and Dogs is created to help pet owners find temporarily places for their pets to stay so that the owners can take their vacation in ease knowing that their pet will be taken care of while being away. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.',
			image: 'catsanddogs.png',
			technologies: [
                'HTML/CSS', 
            	'JavaScript', 
            	'Bcrypt',
				'Express',
				'Dotenv',
				'Sequelize',
				'Handlebars',
				'Heroku'],
			github: 'https://github.com/nelson92/Raining-Cats-and-Dogs',
			deployed: 'https://raining-cats-dogs.herokuapp.com/',
		},
		{
			name: 'The QTRO: A Comprehensive News Aggregator',
			description:
				'This project was created using HTML, CSS, Javascript, API data, Jquery, and Tailwind. The project demonstrates the ability to use multiple different APIs together to create a website, with multiple user interactive elements. Additionally, the project display responsiveness, with different uses of traditional CSS and also Tailwind CSS.',
			image: 'news.png',
			technologies: [
				'JavaScript',
				'HTML & CSS',
				'Jquery',
				'Tailwind'
			],
			github: 'https://github.com/nelson92/project-one',
			deployed: 'https://nelson92.github.io/project-one/',
		},
		{
			name: 'Password Generator',
			description:
				'An application that an employee can use to generate a random password based on criteria they have selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code',
			image: 'password_generator.png',
			technologies: [
				'JavaScript',
				'HTML & CSS',
				
			],
			github: 'https://github.com/nelson92/challenge--3-code',
			deployed: 'https://nelson92.github.io/challenge--3-code/',
		},
		{
			name: 'Word Day Scheduler',
			description:
				'A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.',
			image: 'scheduler.png',
			technologies: [
				'JavaScript',
				'HTML & CSS',
				'Jquery'
				
			],
			github: 'https://github.com/nelson92/work-day-scheduler',
			deployed: 'https://nelson92.github.io/work-day-scheduler/',
		},
	];

    return (
        <section className="background">
			<div className="center background">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li>
						<Project projects={projects[0]}></Project>
					</li>
					<li>
						<Project projects={projects[1]}></Project>
					</li>
					<li>
						<Project projects={projects[2]}></Project>
					</li>
					<li>
						<Project projects={projects[3]}></Project>
					</li>
					<li>
						<Project projects={projects[4]}></Project>
					</li>
					<li>
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
				
			</div>
		</section>

    );

}

export default Portfolio;