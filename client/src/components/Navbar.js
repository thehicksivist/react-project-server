import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-success">
				<div className="container">
					<Link className="navbar-brand" to="/home">
						HOME
					</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="mobile-nav">
						<ul className="navbar-nav">
						<li className="nav-item">
								<Link className="nav-link" to="/about">
									ABOUT
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/services">
									SERVICES
								</Link>
							</li>
						</ul>

						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/freequote">
									QUOTE
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
export default Navbar;
