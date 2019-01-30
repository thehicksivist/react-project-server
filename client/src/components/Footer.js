import React from 'react';

const Footer = () => {
	return (
		<div class="fixed-bottom pt-5">
			<footer className="bg-success text-white mt-4 p-4 text-center page-footer" >
				Copyright &copy;{new Date().getFullYear} Five Stars Mowing
			</footer>
		</div>
	);
};
export default Footer;
