import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/layout/Header';
import Featured from './components/featured';
import Jobs from './components/jobs';
import Footer from './components/layout/Footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App" style={{ height: '1500px', background: 'cornflowerBlue' }}>
				<Header />
				<Featured />
				<Jobs />
				<Footer />
			</div>
		);
	}
}

export default App;
