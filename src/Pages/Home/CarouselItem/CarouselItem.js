import { Container, Typography } from '@mui/material';
import React from 'react';

const CarouselItem = ({review}) => {
	return (
		<Container>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>

				<div style={{ width: 600, padding: '30px', backgroundColor: 'white', borderRadius: '20px' }}>

					<div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>

						<div style={{ width: '60px' }}>
							<img style={{ width: '100%', borderRadius: '50%', border: '3px solid #EB6D2F' }} src={review.image} alt="" />
						</div>

						<div>
							<Typography>Rating: {review.rating}</Typography>

							<Typography sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 800, color: '#5A3733' }} variant="h5" component="div">
								{review.user?.Name}
							</Typography>

							<Typography sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 600, color: '#EB6D2F' }} variant="h6" component="div">
								{review.profession}
							</Typography>
						</div>

					</div>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						{review.comment}
					</Typography>


				</div>

			</div>
		</Container>
	);
};

export default CarouselItem;