import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import './style.css';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
			<Row xs={1} md={2} className="g-4">
			  {Array.from({ length: 2 }).map((_, idx) => (
				<Col>
				  <Card>
					<Card.Img src={require(`../../assets/${image}`)} className="card-image"/>
					<Card.Body>
					  <Card.Title className="card-title inline-size">{name}</Card.Title>
					  <Card.Text className="card-text inline-size">{description}
					  </Card.Text>
					  <Card.Subtitle className="card-subtitle">Technology Used</Card.Subtitle>
                   <Card.Text>
                       <p className='card-text'>{getCards(techs)}
                           </p>car
                           </Card.Text>
                   <Card.Link href={appLink} target="_blank" className="card-link">
                       {name} Deployed Application
                   </Card.Link>
                   <br></br>
                   <Card.Link href={gitLink} target="_blank" className="card-link">
                       {name} Github Repo
                   </Card.Link>
					</Card.Body>
				  </Card>
				</Col>
			  ))}
			</Row>
		  );
}

export default Project;