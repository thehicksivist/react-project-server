import React, { Component } from 'react';
// import './resources/styles.css';
import './styles/servicestyles.css'
import './styles/carousel.css'
import Header from './components/Header';
import Home from './components/Home/Home'
import About from './components/About/About';
import Services from './components/Services/Services';
import Quote from './components/Quote/Quote';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App" style={{ height: '1500px', background: 'cornflowerBlue' }}>
					{
						<div>
							<Redirect path='/' to='/home'/>
							<Route path='/' component={Header}/>
							<Route exact path="/home" component={Home} />
							<Route exact path="/about" component={About} />
							<Route exact path="/services" component={Services} />
							<Route exact path="/freequote" component={Quote} />
							<Route path="/" component={Footer}/>
						</div>
					}
				</div>
			</Router>
		);
	}
}

export default App;
