import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../../../Shared/Product/Product';

const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('/products.json')
			.then(res => res.json())
			.then(data => setProducts(data));
	}, []);


	return (
		<Box>
			<Container>
				<Box sx={{textAlign: 'center', mt: 20, mb: 4}}>
					<Typography variant="h6" sx={{ fontFamily: "'Raleway', sans-serif", color: '#EB6D2F', fontWeight: 700 }}>
						Products
					</Typography>

					<Typography variant="h3" sx={{ fontFamily: "'Signika', sans-serif", color: '#5A3733', fontWeight: 700 }}>
						Online Store
					</Typography>
				</Box>

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
	);
};

export default Products;