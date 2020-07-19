import React, {Component} from 'react';
import {DISHES} from '../shared/dishes.js';
import { COMMENTS } from '../shared/comments.js';
import { PROMOTIONS } from '../shared/promotions.js';
import { LEADERS } from '../shared/leaders.js';
import Menu from './MenuComponent.js';
import DishDetail from './DishDetailsComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import Contact from './ContactComponent.js';
import About from "./AboutComponent.js";
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS
		};
	}

	render() {

		const DishWithId = ({match}) => {
			return (
				<DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
					comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
				/>
			);
		}

		const HomePage = () => {
			return (
				<Home 
					dish={this.state.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
					leader={this.state.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		}

		return (
			<React.Fragment>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} /> 
					<Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />						
					<Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
					<Route path='/menu/:dishId' component={DishWithId} />
					<Route path='/contactus' component={Contact} />
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</React.Fragment>
		);		
	}
}

export default Main;