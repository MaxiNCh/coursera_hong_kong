import React from 'react';
import {Card, CardTitle, CardBody, CardImg, CardText, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent.js'

function RenderCard({item, isLoading, errMess}) {
	
	if (isLoading) {
		return (
			<Loading />
		)
	}
	else if (errMess){
		return (
			<h4> {errMess} </h4>
		)
	 }
	else {
		return (
			<Card>
				<CardImg src={item.image} alt={item.name} />
				<CardBody>
					<CardTitle><h5>{item.name}</h5></CardTitle>
					{item.designation ? <CardSubtitle><h6>{item.designation}</h6></CardSubtitle> : null}
					<CardText>{item.description}</CardText>
				</CardBody>			
			</Card>
		)
	}
}

function Home(props) {
	return (
		<div className="container">
			<div className="row align-items-start">
				<div className="col-12 col-md m-1">
					<RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.promotion} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.leader} />
				</div>
			</div>
		</div>
	);
}

export default Home;