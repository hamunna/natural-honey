import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import About from '../About/About';
import HeroBanner from '../HeroBanner/HeroBanner';
import Products from '../Products/Products';

const HomePage = () => {
	return (
		<div>
			<Navigation />

			<HeroBanner />

			<Products />

			<About />
		</div>
	);
};

export default HomePage;