import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import bg from '../../../images/testimonials-bg.jpg';

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch('/reviews.json')
			.then(res => res.json())
			.then(data => setReviews(data));
	}, []);

	const testimonialBg = {
		backgroundImage: `url(${bg})`,
		// backgroundSize: 'contain',
		backgroundPosition: 'top right',
		height: '400px',
		my: 10,
		pt: 10
	}

	return (
		<Box sx={testimonialBg}>

			<Testimonial reviews={reviews} />

		</Box>
	);
};

export default Testimonials;