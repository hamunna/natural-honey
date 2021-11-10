import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../../../Shared/Product/Product';
import productBg from '../../../images/products-bg.jpg';
import wave from '../../../images/wave-underline.png';


const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('/products.json')
			.then(res => res.json())
			.then(data => setProducts(data));
	}, []);

	const bg = {
		backgroundImage: `url(${productBg})`,
		backgroundSize: 'cover',
		py: 4
	}

	return (

		<Box sx={{ my: 14 }}>
			<Box sx={{ textAlign: 'center', mb: -6}}>
				<Typography variant="h6" sx={{ fontFamily: "'Raleway', sans-serif", color: '#EB6D2F', fontWeight: 700 }}>
					Products
				</Typography>

				<Typography variant="h3" sx={{ fontFamily: "'Signika', sans-serif", color: '#5A3733', fontWeight: 700 }}>
					Online Store
				</Typography>

				<img style={{width: '20vw'}} src={wave} alt="" />

			</Box>

			<Box sx={bg}>
				<Container>


					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


						{
							products.map(product => <Product
								key={product.name}
								product={product}
							/>)
						}
					</Grid>
				</Container>
			</Box>
		</Box>
	);
};

export default Products;