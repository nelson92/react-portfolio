import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const techs = currentProject.technologies;
	const appLink = currentProject.deployed;
	const gitLink = currentProject.github;

	
	function getCards(cardArray) {
		let list = "";

		for (var i = 0; i < cardArray.length; i++) {
			if (i === cardArray.length - 1) {
				list += cardArray[i];
			} else {
				list += cardArray[i] + ", ";
			}
		}

		return list;
	}

	return (
		<Card style={{ width: "28rem" }}>
			<Card.Img src={require(`../../assets/${image}`)} 	className="card-image"/>
			
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>

					<Card.Subtitle className="card-subtitle">Technology Used</Card.Subtitle>
					<Card.Text className="card-techs">{getCards(techs)}</Card.Text>

					<Card.Link href={appLink} target="_blank" className="card-link">
						{name} Deployed Application
					</Card.Link>
					<br></br>
					<Card.Link href={gitLink} target="_blank" className="card-link">
						{name} Github Repo
					</Card.Link>
				</Card.Body>
			
		</Card>
	);
}

export default Project;