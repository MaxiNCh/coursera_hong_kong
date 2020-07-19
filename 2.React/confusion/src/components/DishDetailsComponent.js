import React from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';



function	RenderDish(dish) {
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

function	RenderComments(commentsArray) {

		if ( commentsArray != null) {
			const comments = commentsArray.map( (comment) => {
				return (
					<li key={comment.id}> 
						<p className="blockquote">{comment.comment}</p>
						<footer className="blockquote-footer">
							{comment.author},	&nbsp;
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
	const commentsArray = props.comments;
	
	return (

		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
					<BreadcrumbItem active>{dish.name}</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>{dish.name}</h3>
					<hr />
				</div>                
			</div>
			<div className="row">	
				<div className="col-12 col-md-5 m-1">	
					{RenderDish(dish)}	
				</div>	

				<div className="col-12 col-md-5 m-1">	
					{RenderComments(commentsArray)}
				</div>	
			</div>	
		</div>
	);		

}

export default DishDetail;