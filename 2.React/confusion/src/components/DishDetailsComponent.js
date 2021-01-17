import React, {useState} from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
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

function	RenderComments(commentsArray, addComment, dishId) {

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
				<ul className="list-unstyled">
					{comments}
				</ul>
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
	const addComment = props.addComment;
	const dishId = props.dish.id;
	
	const [modal, setModal] = useState(false);

	const toggleModal = () => setModal(!modal);

	const handleSubmit = (values) => {
		toggleModal();
		addComment(dishId, values.rating, values.author, values.comment);
	}

	const required = (val) => val && val.length;
	const maxLength = (len) => (val) => !(val) || (val.length <= len);
	const minLength = (len) => (val) => val && (val.length >= len);

	return (

		<div className="container">
			<Modal isOpen={modal} toggle={toggleModal}>
				<ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
				<ModalBody>
					<LocalForm onSubmit={values => handleSubmit(values)}>
						<div className="form-group">
							<Label htmlFor="rating">Rating</Label>
							<Control.select model=".rating" 
								id="rating"
								name="rating"
								className="form-control">
								<option></option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</Control.select>
						</div>
						<div className="form-group">
							<Label htmlFor="author">Your Name</Label>
							<Control.text model=".author" 
								id="author" 
								name="author"
								placeholder="Your Name"
								className="form-control"
								validators={{
									required, 
									minLength: minLength(3), 
									maxLength: maxLength(15)
								}}
							/>
							<Errors
								className="text-danger"
								model=".author"
								show="touched"
								messages={{
								required: 'Required',
								minLength: 'Must be greater than 2 characters',
								maxLength: 'Must be 15 characters or less'
								}}
							/>
						</div>
						<div className="form-group">
							<Label htmlFor="comment">Comment</Label>
							<Control.textarea model=".comment" 
								id="comment" 
								name="comment" 
								rows="8"
								placeholder="Your comment"
								className="form-control" 
							/>
						</div>
						<Button className="btn" type="submit" value="submit" color="primary">Submit</Button>
					</LocalForm>
				</ModalBody>

			</Modal>
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
					<Card>
						<CardBody>
							<CardTitle><h5>Comments</h5></CardTitle>							
							{RenderComments(commentsArray, addComment, dishId)}							
							<button type="button" className="btn btn-outline-secondary" onClick={toggleModal}><i className="fa fa-pencil"></i> Submit Comment</button>
						</CardBody>					
					</Card>	
				</div>
			</div>	
		</div>
	);		

}

export default DishDetail;