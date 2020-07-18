import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from '../shared/dishes.js';
import Menu from './MenuComponent.js';
import DishDetail from './DishDetailsComponent.js';

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
			<div>
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="">Restorante Con Fusion</NavbarBrand>
					</div>
				</Navbar>
				<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
				<DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
			</div>
		);		
	}
}

export default Main;