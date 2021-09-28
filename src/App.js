import React, { Component } from 'react';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsFeed from 'components/Pages/NewsFeed';
import TempNavBar from 'components/shared/TempNavBar';

import Footer from './components/shared/Footer';
import Landing from 'components/Pages/registration/Landing';
import Login from 'components/Pages/registration/Login';
import Register from 'components/Pages/registration/Register';

// import NavBar from './components/NavBar';

export default class App extends Component {
	state = {
	  user: {},
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route path="/newsfeed">
						<NewsFeed>
							<TempNavBar />
						</NewsFeed>
					</Route>
					<Route path="/profile/:id">
						<Home>
							<TempNavBar />
						</Home>
					</Route>
				</Switch>
				<Footer />
			</Router>
		)
	}
}
