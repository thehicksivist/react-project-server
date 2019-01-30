import React, { Component } from 'react';
import logo from '../resources/images/mow-logo.png';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-success navbar-fixed-top">
				<div className="container">
					<a className="navbar-brand" href="/">
						<img src={logo} width="300" height="119" class="d-inline-block align-top" alt="" />
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
						<span class="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse justify-content-right" id="navbarNav">
						<ul class="navbar-nav right">
							<li class="nav-item active">
								<a class="nav-link" href="/">
									HOME <span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/about">
									ABOUT
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/feedback">
									FEEDBACK
								</a>
							</li>

							<li class="nav-item">
								<a class="nav-link " href="/services">
									SERVICES
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link " href="/freequote">
									QOUTE
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
export default Navbar;
