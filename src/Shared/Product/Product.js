import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Link, NavLink } from 'react-router-dom';

const Product = ({ product }) => {

	const productBtn = {
		backgroundColor: '#5A3733',
		px: 5,
		py: 1,
		mx: 'auto',
		fontWeight: 700,
		borderRadius: '50px',
		fontFamily: "'Signika', sans-serif",
		'&:hover': {
			backgroundColor: '#EB6D2F',
			boxShadow: 'none',
		}
	}

	const { _id, image, name, description, basicPrice, discountPrice, ratings, rated } = product;

	return (
		<Grid item xs={4}>

			<Card variant="outlined" sx={{ pb: 3 }}>
				<CardMedia
					component="img"
					image={image}
					alt="green iguana"
				/>

				<CardContent sx={{ textAlign: 'center' }}>

					<Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "'Signika', sans-serif", color: '#5A3733', fontWeight: 700 }}>
						{name}
					</Typography>

					<Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'Signika', sans-serif", my: 2 }}>
						{description.split(' ').slice(0, 6).toString().replace(/,/g, ' ')}...
					</Typography>

					<Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', my: -2 }}>
						<Typography variant="h6" sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 700, color: 'silver', textDecoration: 'line-through' }}>
							&#36;{basicPrice}
						</Typography>

						<Typography variant="h6" sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 700, color: '#EB6D2F' }}>
							&#36;{discountPrice}
						</Typography>
					</Box>

				</CardContent>

				<CardActions>

					<NavLink style={{ color: 'white', textDecoration: 'none', margin: '0 auto' }} to={`purchase/${_id}`}>
						<Button sx={productBtn} variant="contained">
							Shop Now
						</Button>
					</NavLink>
				</CardActions>

			</Card>
		</Grid>

	);
};

export default Product;