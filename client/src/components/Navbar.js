import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-light navbar-fixed-top">
				<div className="container">
					<a className="navbar-brand" href="/">
						<img
							src="https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548904661/Five%20Star/mow-logo.png"
							width="300"
							height="119"
							className="d-inline-block align-top img-responsive"
							alt=""
						/>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse justify-content-right" id="navbarNav">
						<ul className="navbar-nav right">
							<li className="nav-item active">
								<NavLink to="/" className="nav-link text-dark">
									HOME
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about" className="nav-link text-dark">
									ABOUT
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/feedback" className="nav-link text-dark">
									FEEDBACK
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink to="/services" className="nav-link text-dark">
									SERVICES
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/freequote" className="nav-link text-dark">
									QUOTE
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
export default Navbar;
