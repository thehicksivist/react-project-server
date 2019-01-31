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
				<div class="col-6 align-items-center">
					<div>
						<img class="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735762/Five%20Star/mower_c.jpg"} alt="mower"/>
						<br/><p class="servicetext">LAWN MOWING</p>
					</div>		
				</div>
				<div class="col-6 align-items-center">
					<div>
						<img class="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735759/Five%20Star/whippersnipper_c.jpg"} alt="whipsnip"/>
						<br/><p class="servicetext">WHIPPER SNIPPING</p>
					</div>				
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<img class="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735761/Five%20Star/weeding_c.jpg"} alt="weeding"/>
					<br/><p class="servicetext">WEEDING</p>				
				</div>
				<div class="col-6">
					<img class="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735756/Five%20Star/hedging_c.jpg"} alt="hedging"/>
					<br/><p class="servicetext">HEDGE TRIMMING</p>				
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<img class="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735763/Five%20Star/spraying_c.jpg"} alt="spraying"/>
					<br/><p class="servicetext">PLANT SPRAYING</p>				
				</div>
				<div class="col-6">
					<img class="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735758/Five%20Star/rubbish_c.jpg"} alt="rubbish"/>
					<br/><p class="servicetext">RUBBISH REMOVAL</p>				
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<img class="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735762/Five%20Star/gardening_c.jpg"} alt="gardening"/>
					<br/><p class="servicetext">GARDENING</p>				
				</div>
				<div class="col-6">
					<img class="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735758/Five%20Star/treeremove_c.jpg"} alt="treetrim"/>
					<br/><p class="servicetext">TREE TRIMMING</p>				
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<img class="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735758/Five%20Star/treeremove_c.jpg"} alt="treecut"/>
					<br/><p class="servicetext">TREE REMOVAL</p>				
				</div>
				<div class="col-6">
					<img class="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735766/Five%20Star/turf_c.jpg"} alt="turfing"/>
					<br/><p class="servicetext">TURF LAYING</p>				
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<img class="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548807835/Five%20Star/fert_c.jpg"} alt="fertilizer"/>
					<br/><p class="servicetext">FERTILISE LAWNS</p>				
				</div>
				<div class="col-6">
					<img class="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548735755/Five%20Star/pressurewash_c.jpg"} alt="pressurewash"/>
					<br/><p class="servicetext">PRESSURE WASHING</p>				
				</div>
			</div>
		</div>
		</div>
		)
	}
}

export default Services;


