import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Testimonial from '../Testimonial/Testimonial';
import bg from '../../../images/testimonials-bg.jpg';
import bgBee from '../../../images/bee-1.gif';
import { Container } from '@mui/material';

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
		height: '500px',
		mb: 10
	}

	const testimonialBgBee = {
		backgroundImage: `url(${bgBee})`,
		backgroundPosition: 'top left',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '160px',
		height: '500px',
		my: 10,
		pt: 10
	}

	return (
		<Box sx={testimonialBg}>

			<Container>
				<Box sx={testimonialBgBee}>
					<Testimonial reviews={reviews} />
				</Box>
			</Container>

		</Box>
	);
};

export default Testimonials;