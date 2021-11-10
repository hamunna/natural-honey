import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const Product = ({ product }) => {

	const { image, name, description, basicPrice, discountPrice, ratings, rated } = product;

	return (
		<Grid item xs={4}>

			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					image={image}
					alt="green iguana"
				/>

				<CardContent sx={{textAlign: 'center'}}>

					<Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "'Signika', sans-serif", color: '#5A3733', fontWeight: 700 }}>
						{name}
					</Typography>

					<Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'Signika', sans-serif", my: 3 }}>
						{description.slice(0, 80)}...
					</Typography>

					<Box sx={{display: 'flex', gap: 3, justifyContent: 'center'}}>
						<Typography variant="h6" sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 700, color: 'silver', textDecoration: 'line-through' }}>
							&#36;{basicPrice}
						</Typography>

						<Typography variant="h6" sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 700, color: '#EB6D2F' }}>
							&#36;{basicPrice}
						</Typography>
					</Box>

				</CardContent>
{/* 
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions> */}
				
			</Card>
		</Grid>

	);
};

export default Product;