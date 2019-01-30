import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide_one.png';
import slide_two from '../../resources/images/slide_two.png';
import slide_three from '../../resources/images/slide_three.png';

const Carrousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true
	};
	return (
		<div
			className="carrousel_wrapper"
			style={{ height: `${window.innerHeight}px`, width: `${window.innerWidth}px`, overflow: 'hidden' }}
		>
			<Slider {...settings}>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${slide_one})`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${slide_two})`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${slide_three})`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
			</Slider>
		</div>
	);
};

export default Carrousel;
