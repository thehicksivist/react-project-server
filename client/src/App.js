import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/Header';
import Home from './components/Home';
import Feedback from './components/Feedback';
import Featured from './components/featured';
import Jobs from './components/jobs';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
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
							<Header />

							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/feedback" component={Feedback} />
							<Route path="/Services" component={Services} />
							<Route path="/freequote" component={Quote} />
							<div>
								<Footer />
							</div>
						</div>
					}
				</div>
			</Router>
		);
	}
}

export default App;
