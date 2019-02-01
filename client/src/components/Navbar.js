import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-success navbar-fixed-top">
				<div className="container">
					<a className="navbar-brand" href="/">
						<img
							src="https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548904661/Five%20Star/mow-logo.png"
							width="300"
							height="119"
							class="d-inline-block align-top"
							alt=""
						/>
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse justify-content-right" id="navbarNav">
						<ul className="navbar-nav right">
							<li className="nav-item active">
								<NavLink to="/" className="nav-link">
									HOME
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about" className="nav-link">
									ABOUT
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/feedback" className="nav-link">
									FEEDBACK
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink to="/services" className="nav-link">
									SERVICES
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/freequote" className="nav-link">
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
