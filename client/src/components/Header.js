import React, { Component } from 'react';
import Navbar from './Navbar';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';

// import { Link } from 'react-router-dom';

class Header extends Component {
	state = {
		headerShow: false
	};
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	handleScroll = () => {
		if (window.scrollY > 0) {
			this.setState({
				headerShow: true
			});
		} else {
			this.setState({
				headerShow: false
			});
		}
	};
	render() {
		return (
			<div className="Regular shadow">
				<Navbar />
			</div>
		);
	}
}

export default Header;
