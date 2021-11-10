import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import HeroBanner from '../HeroBanner/HeroBanner';
import Products from '../Products/Products';

const HomePage = () => {
	return (
		<div>
			<Navigation />

			<HeroBanner />

			<Products />
		</div>
	);
};

export default HomePage;