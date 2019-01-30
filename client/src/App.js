import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/Header';
import Featured from './components/featured';
import Jobs from './components/jobs';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';
import Quote from './components/Quote/Quote';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App" style={{ height: '1500px', background: 'cornflowerBlue' }}>
				{
					<Router>
						<div>
							<Route
								path="/"
								render={(props) => (
									<div>
										<Header />
										<Featured />
										<Jobs />
										<Footer />
									</div>
								)}
							/>

							{/* <Route exact path="/home" component ={Home} /> */}

							<Route exact path="/about" component={About} />

							<Route exact path="/services" component={Services} />

							<Route exact path="/freequote" component={Quote} />

							<Route path="/" render={(props) => <Footer />} />
						</div>
					</Router>
				}
			</div>
		);
	}
}

export default App;
