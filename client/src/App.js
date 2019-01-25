import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Quote from './components/Quote/Quote'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
			{
				<Router>
					<div>
					<Route path="/" render={(props) => (
						<Navbar/>
					)} />
			
					<Route exact path="/home" render={() => (
						// <Home/>
						<div></div>
					)} />
	                                {/* // render suppouse to render always a components = {About} for example below :
					//  <Router>
					//     <Route path="/" component={App}>
					//       <Route path="about" component={About} />
					//       <Route path="inbox" component={Inbox}>
					//         <Route path="messages/:id" component={Message} />
					//       </Route>
					//     </Route>
					//   </Router> */}
                                        
					<Route exact path="/about" component ={About} />
						
					
	
					<Route exact path="/services" render={(props) => (
						<Services/>
					)} />
	
					<Route exact path="/contact" render={() => (
						<Quote/>						
					)} />
	
					<Route exact path="/freequote" render={() => (
						<Quote/>
					)} />
	
					<Route path="/" render={(props) => (
						<Footer/>
					)} />
					</div>
				</Router>
				}
			</div>
		  );
	}
}

export default App;
