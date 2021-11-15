import { Container, Rating, Typography } from '@mui/material';
import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import dummyUserImg from '../../../images/dummy-user-img.png';

const CarouselItem = ({ review }) => {

	const { image, rating, userName, profession, comment } = review;
	return (
		<Container>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>

				<div style={{ maxWidth: 500, height: '260px', padding: '50px', backgroundColor: 'white', borderRadius: '20px' }}>

					<div style={{ display: 'flex', gap: '30px', alignItems: 'start', marginBottom: '20px' }}>

						<div style={{ width: '40px', height: '40px' }}>
							{image !== null ?
								<img style={{ width: '100%', borderRadius: '50%', border: '1px solid #EB6D2F', padding: '2px' }} src={image} alt="" />
								:
								<img style={{ width: '100%', borderRadius: '50%', border: '1px solid #EB6D2F', padding: '2px' }} src={dummyUserImg} alt="" />}
						</div>

						<div>
							<Rating name="read-only" size="small" value={rating} readOnly />

							<Typography sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 800, color: '#5A3733' }} variant="h5" component="div">
								{userName}
							</Typography>

							<Typography sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 600, color: '#EB6D2F' }} variant="body" component="div">
								{profession}
							</Typography>
						</div>

					</div>
					<Typography sx={{ fontSize: 16, fontStyle: 'italic', fontWeight: 100, textAlign: 'center' }} color="text.secondary" gutterBottom>
						{comment.split(' ').slice(0, 36).toString().replace(/,/g, ' ')}...
					</Typography>

					<div style={{ textAlign: 'right' }}>
						<FormatQuoteIcon sx={{ fontSize: 90, color: 'orange' }} />
					</div>

				</div>

			</div>
		</Container>
	);
};

export default CarouselItem;