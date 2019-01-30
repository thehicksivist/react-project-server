import React, { Component } from 'react';
// import Text from '../Text'


class About extends Component {
	render() {
		return (
			<div>
				<h1 class="container">About</h1>
				<div>
					<img src="https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548736044/Five%20Star/Troy_c.jpg" class="float-left  p-3 col-xs-6 col-sm-6 col-md-4 col-lg-6 col-xl-4" ></img>
				</div>
				<div class="p-4 pb-5">
					<p class=" pb-2 text-left">
						Five Star Mowing offers fast and reliable lawn and garden care for commercial and domestic resident properties in Caboolture and the surrounding areas of north Brisbane.
						Fill out the <a href="/Quote.js">(Quote Form)</a> to have a free quote and property inspection.
					</p>
					<p class="font-weight-bold py-4">Because you’ve got better things to do on a weekend than mow!</p>
				</div>
			</div>
		)
	}
}

export default About;