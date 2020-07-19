import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from '../shared/dishes.js';
import Menu from './MenuComponent.js';
import DishDetail from './DishDetailsComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
		};
	}

	render() {

		const HomePage = () => {
			return (
				<Home />
			);
		}

		return (
			<React.Fragment>
				<Header />
				<Switch>
					<Route path='/home' > 
						{HomePage}
					</Route>
					<Route exact path='/menu'>
						<Menu dishes={this.state.dishes} />
					</Route>
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</React.Fragment>
		);		
	}
}

export default Main;