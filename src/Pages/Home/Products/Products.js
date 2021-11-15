import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../../../Shared/Product/Product';
import productBg from '../../../images/login-form-bg.jpg';
import wave1 from '../../../images/wave-1.png';
import { NavLink } from 'react-router-dom';
import LoadingBee from '../../../Shared/LoadingBee/LoadingBee';


const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		fetch('http://localhost:5000/products')
			// fetch('/products.json')
			.then(res => res.json())
			.then(data => setProducts(data))
			.finally(()=> setIsLoading(false));
	}, []);

	const bg = {
		backgroundImage: `url(${productBg})`,
		backgroundSize: 'cover',
		py: 4,
		my: 14
	}

	const loadMoreBtn = {
		// backgroundColor: '#fff',
		backgroundColor: '#EB6D2F',
		// color: '#5A3733',
		px: 6,
		py: 2,
		mx: 'auto',
		my: 6,
		// width: '90%',
		fontWeight: 700,
		borderRadius: '50px',
		fontFamily: "'Raleway', sans-serif",
		'&:hover': {
			backgroundColor: '#5A3733',
			// color: '#fff',
			boxShadow: 'none',
		}
	}

	if (isLoading) { return <LoadingBee /> }
	return (

		<Box id="products" sx={bg}>
			<Box sx={{ textAlign: 'center', mb: 5 }}>
				<Typography variant="h6" sx={{ fontFamily: "'Raleway', sans-serif", color: '#EB6D2F', fontWeight: 700 }}>
					Products
				</Typography>

				<Typography variant="h3" sx={{ fontFamily: "'Signika', sans-serif", color: '#5A3733', fontWeight: 700}}>
					Online Store
				</Typography>

				<img style={{ width: '6vw', marginTop: '10px' }} src={wave1} alt="" />

			</Box>

			<Box>
				<Container>
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						{
							products.map(product => <Product
								key={product._id}
								product={product}
							/>).slice(0, 6)
						}

						<NavLink style={{textDecoration: 'none', margin: '0 auto'}} to="/shop">
							<Button sx={loadMoreBtn} variant="contained">
								All Products
							</Button>
						</NavLink>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
};

export default Products;