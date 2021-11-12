import { Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
// import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
// import './PlaceOrder.css';

const Purchase = () => {

	// const { image, name, description, basicPrice, discountPrice, ratings, rated } = product;

	const [purchaseData, setPurchaseData] = useState([]);
	const { user } = useAuth();
	const [order, setOrder] = useState([]);
	const [singleHoney, setSingleHoney] = useState({});
	const { productId } = useParams();

	// const userNameRef = useRef();
	// const userEmailRef = useRef();
	// const address1Ref = useRef();
	// const address2Ref = useRef();
	// const cityRef = useRef();
	// const districtRef = useRef();
	// const zipRef = useRef();

	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;

		const newOrderData = { ...purchaseData };
		newOrderData[field] = value;

		console.log(newOrderData);
		setPurchaseData(newOrderData);
	}

	// const handlePurchaseProduct = e => {

	// 	const newOrder = { singleTour, serviceName, serviceEmail, address1, address2, city, zip, tourId: productId, status: { pending: "Pending", approved: " " } }


	// 	fetch('http://localhost:5000/allOrders', {
	// 		method: 'POST',
	// 		headers: {
	// 			'content-type': 'application/json'
	// 		},
	// 		body: JSON.stringify(newOrder)
	// 	})
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			if (data.insertedId) {
	// 				alert('Order Placed Successfully!');
	// 				e.target.reset();
	// 			}
	// 			const addedService = data;
	// 			setSingleTour(addedService);
	// 		})
	// 	e.preventDefault();
	// }

	useEffect(() => {
		const url = `http://localhost:5000/products`;
		fetch(url)
			.then(res => res.json())
			.then(data => setOrder(data));
	}, []);

	useEffect(() => {
		const findOrder = order.find(
			(tour) => tour._id === productId
		);
		setSingleHoney(findOrder);
	}, [order]);

	//==========================
	// Styles
	//==========================
	const inputStyle = {
		mb: 3
	}

	// Place Order Style
	const placeOrderBtn = {
		backgroundColor: '#5A3733',
		px: 25,
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
		<Container sx={{ textAlign: 'center', my: 5, mx: 'auto', textAlign: 'center', boxShadow: '0 0 12px 0 #5A3733',borderRadius: '20px', py: 2 }}>

			<Typography sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 800, color: '#5A3733' }} variant="h4" gutterBottom component="div">
				Complete Purchase
			</Typography>

			<form sx={{ textAlign: 'center' }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ fontFamily: "'Signika', sans-serif"}}>


					{/* Left Side */}
					<Grid item xs={6} md={6} >

						<Box sx={{ ml: 'auto', width: '60%' }}>

							<Card variant="outlined" sx={{ width: '100%' }}>
								<CardMedia
									sx={{ height: '300px' }}
									component="img"
									image={singleHoney?.image}
									alt="green iguana"
								/>

								<CardContent sx={{ textAlign: 'center' }}>

									<Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "'Signika', sans-serif", color: '#5A3733', fontWeight: 700 }}>
										{singleHoney?.name}
									</Typography>

									{/* <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'Signika', sans-serif", my: 2 }}>
									{singleHoney?.description}
								</Typography> */}

									<Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', my: -2 }}>
										<Typography variant="h6" sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 700, color: 'silver', textDecoration: 'line-through' }}>
											&#36;{singleHoney?.basicPrice}
										</Typography>

										<Typography variant="h6" sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 700, color: '#EB6D2F' }}>
											&#36;{singleHoney?.discountPrice}
										</Typography>
									</Box>

								</CardContent>

							</Card>
							{/* </Grid> */}
						</Box>

					</Grid>

					{/* Right Side */}
					<Grid item xs={6} md={6}>

						<Box sx={{ mr: 'auto', width: '100%' }}>


							<Box sx={{ width: 500, maxWidth: '100%' }}>

								{/* User Name Field */}
								<TextField fullWidth
									sx={inputStyle}
									id="userName"
									name="userName"
									label="Name"
									value={user?.displayName}
									readOnly
									onBlur={handleOnBlur}
								/>

								{/* User Email Field */}
								<TextField fullWidth
									sx={inputStyle}
									id="userEmail"
									name="userEmail"
									label="Email"
									value={user?.email}
									onBlur={handleOnBlur}
								/>

								{/* Date & Time */}
								<TextField fullWidth
									sx={inputStyle}
									id="dateTime"
									name="dateTime"
									label="Date &amp; Time"
									value={new Date()}
									onBlur={handleOnBlur}
								/>

								{/* City */}
								<TextField fullWidth
									sx={inputStyle}
									id="city"
									name="city"
									type="text"
									label="City"
									onBlur={handleOnBlur}
								/>

								{/* Street */}
								<TextField fullWidth
									sx={inputStyle}
									id="street"
									name="street"
									type="text"
									label="Street"
									onBlur={handleOnBlur}
								/>

							</Box>

						</Box>

					</Grid>
				</Grid>
				<Button sx={placeOrderBtn} type="submit" variant="contained">Place Order</Button>
			</form>
		</Container>
	);
};

export default Purchase;