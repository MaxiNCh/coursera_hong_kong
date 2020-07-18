import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from '../shared/dishes.js';
import Menu from './MenuComponent.js';
import DishDetail from './DishDetailsComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			selectedDish: null,
		};
	}

	onDishSelect(dishId) {
		this.setState({ selectedDish: dishId });
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
				<DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
				<Footer />
			</React.Fragment>
		);		
	}
}

export default Main;