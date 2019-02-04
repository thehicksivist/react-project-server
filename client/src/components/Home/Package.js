import React, { Children } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import faker from 'faker';
const Package = (props) => {
	return (
		<Card className="mb-3">
			<CardImg top width="100%" src={props.avatar} alt={props.alt} />
			<CardBody>
				<CardTitle>{props.title}</CardTitle>
				<CardText className="text-left">{props.description}</CardText>
				<button className="btn btn-success float-left">{props.more}</button>
			</CardBody>
		</Card>
	);
};

export default Package;
