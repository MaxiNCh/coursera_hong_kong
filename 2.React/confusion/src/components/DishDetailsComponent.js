import React from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';



function	renderDish(dish) {
		if (dish != null) 
			return (
				<Card>
					<CardImg src={dish.image} alt={dish.name} /> 
					<CardBody>
						<CardTitle><h5>{dish.name}</h5></CardTitle>	
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		else 
			return (
				<div></div>
			);      
	}

function	renderComments(dish) {

		if ( dish != null) {
			const comments = dish.comments.map( (comment) => {
				return (
					<li key={comment.id}> 
						<p className="blockquote">{comment.comment}</p>
						<footer className="blockquote-footer">
							{comment.author},  
							{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
						</footer>
						<br/>
					</li>
				);	
			});
				
			return (
				<Card>
					<CardBody>
						<CardTitle><h5>Comments</h5></CardTitle>
						<ul className="list-unstyled">
							{comments}
						</ul>
					</CardBody>					
				</Card>				
			);
		} else {
			return (
				<div></div>
			)
			
		}
		
	}

function DishDetail(props)  {

	const dish = props.dish;
	
	return (

		<div className="container">
			<div className="row">	
				<div className="col-12 col-md-5 m-1">	
					{renderDish(dish)}	
				</div>	

				<div className="col-12 col-md-5 m-1">	
					{renderComments(dish)}	
				</div>	
			</div>	
		</div>
	);		

}

export default DishDetail;