import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardImgOverlay, CardBody, CardText} from 'reactstrap';

class DishDetail extends Component {

	constructor(props) {
		super(props);
	}



	renderDish(dish) {
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

	renderComments(dish) {

		if ( dish != null) {
			const comments = dish.comments.map( (comment) => {
				return (
					<li key="comment.id"> 
						<p className="blockquote">{comment.comment}</p>
						<footer className="blockquote-footer">{comment.author}, {comment.date}</footer>
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

	render () {
		const dish = this.props.dish;
	

		return (
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					{this.renderDish(dish)}
				</div>

				<div className="col-12 col-md-5 m-1">
					{this.renderComments(dish)}
				</div>
			</div>			

		);
		
	}

}

export default DishDetail;