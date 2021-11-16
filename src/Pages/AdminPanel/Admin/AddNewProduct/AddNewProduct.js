import { Button, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import StarIcon from '@mui/icons-material/Star';
import { useHistory, useLocation } from 'react-router';

const AddNewProduct = () => {
	const { user } = useAuth();

	const location = useLocation();
	const history = useHistory();

	const [productData, setProductData] = useState({});

	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;

		const newProductData = { ...productData };
		newProductData[field] = value;

		setProductData(newProductData);
	}

	const handleProductSubmit = e => {

		const newProduct = { ...productData, ratings: 0, rated: 0 };

		fetch('https://natural-honey.herokuapp.com/products', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newProduct)
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {
					alert('Product Added Successfully!');
					e.target.reset();

					const addedProduct = data;
					setProductData(addedProduct);
					const destination = location?.state?.from || '/dashboard';
					history.replace(destination);
				}
			})

		e.preventDefault();
	}

	// // Minimum characters to write
	// const minCharactersOnChange = () => {
	// 	// Selecting Related Elements
	// 	const commentBox = document.getElementById('comment');
	// 	const charRemain = document.getElementById('char-remain');
	// 	// const charExceedMsg = document.getElementById('char-exceed-msg');
	// 	// const charRemainingMsg = document.getElementById('char-remaining-msg');

	// 	if (commentBox.length > 100) {
	// 		// charExceedMsg.style.display = 'block';
	// 		// charRemainingMsg.style.display = 'none';

	// 		charRemain.color = 'green';

	// 	}
	// else {
	// charExceedMsg.style.display = 'none';
	// charRemainingMsg.style.display = 'block';
	// charRemain.innerText = 255 - commentBox.length;
	// }
	// }

	//==========================
	// Styles
	//==========================
	const inputStyle = {
		mb: 2
	}

	const inlineInputStyle = {
		mb: 2,
		width: '100%'
	}

	// Submit Product Style
	const submitProductBtn = {
		backgroundColor: '#5A3733',
		px: 15,
		py: 1,
		mx: 'auto',
		my: 1,
		fontWeight: 700,
		borderRadius: '50px',
		fontFamily: "'Signika', sans-serif",
		'&:hover': {
			backgroundColor: '#EB6D2F',
			boxShadow: 'none',
		}
	}


	return (
		<Container sx={{ textAlign: 'center', mx: 'auto', textAlign: 'center', boxShadow: '0 0 4px 0 #5A3733', borderRadius: '20px', py: 2 }}>

			<Typography sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 800, color: '#5A3733' }} variant="h4" gutterBottom component="div">
				Add New Product
			</Typography>

			<form onSubmit={handleProductSubmit}>

				<Grid item xs={8} sx={{ fontFamily: "'Signika', sans-serif", mx: 'auto', width: '100%' }}>

					<Box>

						{/* Product Name Field */}
						<TextField
							sx={inlineInputStyle}
							fullWidth
							id="productName"
							name="name"
							label="Product Name"
							required
							onBlur={handleOnBlur}
						/>


						{/* Product Image Field */}
						<TextField
							sx={inlineInputStyle}
							type="url"
							id="image"
							name="image"
							label="Product Image URL"
							onBlur={handleOnBlur}
							required
						/>

						{/* Product Description Field */}
						<TextField
							sx={inputStyle}
							fullWidth
							id="description"
							name="description"
							label="Product Description"
							multiline
							required
							rows={6}
							onBlur={handleOnBlur}
						// onChange={minCharactersOnChange}
						/>

						{/* Alert msg */}
						<Typography id="char-remain" color="red">Text must be 100 characters</Typography>

						<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>

							{/* Basic Price Field */}
							<TextField
								sx={inlineInputStyle}
								id="basicPrice"
								name="basicPrice"
								label="Basic Price"
								// type="number"
								onBlur={handleOnBlur}
								required
							/>

							{/* Discount Price Field */}
							<TextField
								sx={inlineInputStyle}
								id="discountPrice"
								name="discountPrice"
								label="Discount Price"
								// type="number"
								onBlur={handleOnBlur}
								required
							/>

						</Box>
					</Box>

				</Grid>
				{/* </Grid> */}
				<Button sx={submitProductBtn} type="submit" variant="contained">Submit Product</Button>
			</form>
		</Container>
	);
};

export default AddNewProduct;