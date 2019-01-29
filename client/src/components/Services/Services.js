import React, { Component } from 'react';

class Services extends Component {
	render() {
		return (
			<div>
				{/* the code commented out below is for image upload to be implemented later */}
				{/* <div class="widget">
				<script src="//widget.cloudinary.com/global/all.js" type="text/javascript"></script>
				<script src="bundle.js"></script>
				</div> */}
		<div class="container">
			<div class="row">
				<div class="col-6">
					<img class="rounded" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735762/Five%20Star/mower_c.jpg"} alt="mower"/>
					<br/>LAWN MOWING				
				</div>
				<div class="col-6">
					<img class="rounded" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735759/Five%20Star/whippersnipper_c.jpg"} alt="whipsnip"/>
					<br/>WHIPPER SNIPPING				
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<img class="rounded" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735761/Five%20Star/weeding_c.jpg"} alt="weeding"/>
					<br/>WEEDING				
				</div>
				<div class="col-6">
					<img class="rounded" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735756/Five%20Star/hedging_c.jpg"} alt="hedging"/>
					<br/>HEDGE TRIMMING				
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<img class="rounded" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735763/Five%20Star/spraying_c.jpg"} alt="spraying"/>
					<br/>PLANT SPRAYING				
				</div>
				<div class="col-6">
					<img class="rounded" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735758/Five%20Star/rubbish_c.jpg"} alt="rubbish"/>
					<br/>RUBBISH REMOVAL				
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<img class="rounded" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735762/Five%20Star/gardening_c.jpg"} alt="gardening"/>
					<br/>GARDENING				
				</div>
				<div class="col-6">
					<img class="rounded" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735758/Five%20Star/treeremove_c.jpg"} alt="treetrim"/>
					<br/>SMALL TREE TRIMMING				
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<img class="rounded" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735758/Five%20Star/treeremove_c.jpg"} alt="treecut"/>
					<br/>TREE REMOVAL				
				</div>
				<div class="col-6">
					<img class="rounded" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735766/Five%20Star/turf_c.jpg"} alt="turfing"/>
					<br/>TURF LAYING				
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<img class="rounded" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735759/Five%20Star/fertiliser_c.jpg"} alt="fertilizer"/>
					<br/>FERTILISE LAWNS				
				</div>
				<div class="col-6">
					<img class="rounded" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735755/Five%20Star/pressurewash_c.jpg"} alt="pressurewash"/>
					<br/>PRESSURE WASHING				
				</div>
			</div>
		</div>
		</div>
		)
	}
}

export default Services;


