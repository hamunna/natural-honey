import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import bg from '../../../images/testimonials-bg.jpg';
import bgBee from '../../../images/bee-1.gif';
import { Container } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);
	const { isLoading, setIsLoading } = useAuth();


	useEffect(() => {
		fetch('http://localhost:5000/reviews')
			.then(res => res.json())
			.then(data => setReviews(data))
		// .finally(() => setIsLoading(false));
	}, []);

	const testimonialBg = {
		backgroundImage: `url(${bg})`,
		backgroundPosition: 'top right',
		height: '500px',
		mb: 10,
	}

	const testimonialBgBee = {
		backgroundImage: `url(${bgBee})`,
		backgroundPosition: 'top left',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '160px',
		height: '400px',
	}

	return (
		<div style={testimonialBg} id="testimonials">

			<div style={testimonialBgBee}>
				<Container>
					<Testimonial key={reviews.length.toString()} reviews={reviews} />
				</Container>
			</div>

		</div>
	);
};

export default Testimonials;