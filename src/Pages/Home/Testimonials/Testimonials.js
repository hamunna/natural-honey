import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import bg from '../../../images/testimonials-bg.jpg';
import bgBee from '../../../images/bee-1.gif';
import { Container, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';

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
		// backgroundImage: `url(${bg})`,
		backgroundImage: `url('https://i.ytimg.com/vi/Nex2LKZhMjc/maxresdefault.jpg')`,
		// backgroundColor: `rgba(255, 216, 30, 0.9)`,
		// backgroundColor: `rgba(255,230,88), 0.9)`,
		backgroundColor: `rgba(255, 255, 0, 0.9)`,
		backgroundBlendMode: "color-dodge",
		backgroundPosition: 'top right',
		backgroundAttachment: 'fixed',
		height: '650px',
		mb: 10,
	}

	const testimonialBgBee = {
		backgroundImage: `url(${bgBee})`,
		backgroundPosition: 'top left',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '160px',
		height: '600px',
	}

	return (
		<div style={testimonialBg} id="testimonials">
			<Box sx={{ textAlign: 'center', mb: -6, pt: 10 }}>
				<Typography variant="h6" sx={{ fontFamily: "'Raleway', sans-serif", color: '#EB6D2F', fontWeight: 700 }}>
					Testimonial
				</Typography>

				<Typography variant="h3" sx={{ fontFamily: "'Signika', sans-serif", color: '#5A3733', fontWeight: 700 }}>
				What our clients say
				</Typography>

			</Box>
			<div style={testimonialBgBee}>
				<Container>
					<Testimonial key={reviews.length.toString()} reviews={reviews} />
				</Container>
			</div>

		</div>
	);
};

export default Testimonials;