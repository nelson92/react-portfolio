import React from 'react';
import Project from '../project';

// TODO import images for projects

function Portfolio() {
    const projects = [
		{
			name: '...challenge name...',
			description:
				'...description text....',
			image: 'image01.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & NoSQL',
				'Heroku & AWS S3',
				'React.js',
				'MERN Stack',
			],
			github: '...github repo link....',
			deployed: '...http link...',
		},
		{
			name: '...challenge name...',
			description:
				'...description text....',
			image: 'image02.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
			],
			github: '...github repo link....',
			deployed: '...http link...',
		},
		{
			name: '...challenge name...',
			description:
				'...description text...',
			image: 'image.03.png',
			technologies: [
                'HTML/CSS', 
            'JavaScript', 
            'jQuery'],
			github: '...github repo link....',
			deployed: '...http link...',
		},
		{
			name: '....challenge name...',
			description:
				'...description text...',
			image: 'image04.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: '...github repo link....',
			deployed: '...http link...',
		},
	];

    return (
        <section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				
			</div>
		</section>

    );

}

export default Portfolio;