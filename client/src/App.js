import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/Header';
import Carousel from './components/Home/Carousel';
import Packages from './components/Home/Packages';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';
import Quote from './components/Quote/Quote';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App" style={{ height: '1500px', background: 'cornflowerBlue' }}>
					{
						<div>
							<Redirect from="/" to="/home" />
							<Route path="/" component={Header} />
							<Route exact path="/home" component={Carousel} />
							<Route exact path="/home" component={Packages} />
							<Route exact path="/about" component={About} />
							<Route exact path="/services" component={Services} />
							<Route exact path="/freequote" component={Quote} />
							<Route path="/" component={Footer} />
						</div>
					}
				</div>
			</Router>
		);
	}
}

export default App;
