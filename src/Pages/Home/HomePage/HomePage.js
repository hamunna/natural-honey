import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import About from '../About/About';
import HeroBanner from '../HeroBanner/HeroBanner';
import Products from '../Products/Products';
import Testimonials from '../Testimonials/Testimonials';

const HomePage = () => {
	return (
		<div>

			<HeroBanner />

			<Products />

			<About />

			<Testimonials />
		</div>
	);
};

export default HomePage;