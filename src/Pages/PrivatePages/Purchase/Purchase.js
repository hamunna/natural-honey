import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
// import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
// import './PlaceOrder.css';

const Purchase = () => {

	
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

	const inputStyle = {
		my: 1
	}

	return (
		<>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ fontFamily: "'Signika', sans-serif" }}>

				{/* Left Side */}
				<Grid item xs={6} md={5}>

					<Box>
						<Typography sx={{ fontWeight: 800, color: '#5A3733' }} variant="h4" gutterBottom component="div">
							Welcome Back!
						</Typography>

					</Box>

				</Grid>

				{/* Right Side */}
				<Grid item xs={6} md={7}>

					<Box sx={{ textAlign: 'center', mt: 10, mx: 'auto', width: '60%' }}>

						<Typography sx={{ fontWeight: 800, color: '#EB6D2F' }} variant="h4" gutterBottom component="div">
							Product Purchase
						</Typography>

						<form sx={{ textAlign: 'center' }}>

							<Box sx={{ width: 500, maxWidth: '100%' }}>

								{/* User Name Field */}
								<TextField fullWidth
									sx={inputStyle}
									id="userName"
									name="userName"
									type="text"
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
									type="email"
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

							<Button type="submit" variant="contained">Sign up</Button>


						</form>
					</Box>

				</Grid>
			</Grid>
		</>
	);
};

export default Purchase;