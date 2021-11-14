import React, { useEffect, useState } from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Product from '../../Shared/Product/Product';
import LoadingBee from '../../Shared/LoadingBee/LoadingBee';

const Shop = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/products')
			// fetch('/products.json')
			.then(res => res.json())
			.then(data => setProducts(data))
			.finally(()=> setIsLoading(false));
	}, []);

	const productBanner = {
		height: '300px',
		backgroundImage: `url('https://i.pinimg.com/originals/d1/d4/87/d1d4877b75fa342dc09feb12f8c3e101.jpg')`,
		backgroundSize: 'cover',
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		backgroundBlendMode: 'overlay',
		width: '100%',
	}

	if (isLoading) { return <LoadingBee /> }

	return (
		<Box>
			<Box sx={productBanner}>
				<Typography variant="h2" sx={{ textAlign: 'center', pt: 10, color: 'white', fontWeight: 700, fontFamily: 'Signika, Sans-serif' }}>Shop </Typography>

				<Stack spacing={2}>
					<Breadcrumbs
						sx={{ fontFamily: 'Raleway, Sans-serif', color: 'white', fontSize: 18, fontWeight: 700, mx: 'auto' }}
						separator={<NavigateNextIcon fontSize="small" />}
						aria-label="breadcrumb"
					>
						<Link underline="hover" key="1" color="inherit" to="/" style={{ cursor: 'pointer' }}>
							Home
						</Link>,
						<Typography sx={{ textAlign: 'center' }} key="3" color="#ccc">
							Shop
						</Typography>
					</Breadcrumbs>
				</Stack>
			</Box>

			<Box sx={{my: 5}}>
				<Container>
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						{
							products.map(product => <Product
								key={product._id}
								product={product}
							/>)
						}

					</Grid>
				</Container>
			</Box>

		</Box>
	);
};

export default Shop;