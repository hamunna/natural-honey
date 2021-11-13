import { Button, Card, CardContent, CardMedia, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
// import { Card } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import StarIcon from '@mui/icons-material/Star';

const Review = () => {

	const ratingNumbers = [
		{
			value: 1,
			label: 1,
		},
		{
			value: 2,
			label: 2,
		},
		{
			value: 3,
			label: 3,
		},
		{
			value: 4,
			label: 4,
		},
		{
			value: 5,
			label: 5,
		},
	];

	const { user } = useAuth();

	const initialReviewInfo = {
		userName: user?.displayName,
		userEmail: user?.email,
		image: user?.image,
		dateTime: new Date(),
		profession: '',
		comment: '',
		rating: 0
	}

	const [reviewData, setReviewData] = useState(initialReviewInfo);
	// const [rating, setRating] = useState();

	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;

		const newOrderData = { userName: user?.displayName,
			userEmail: user?.email,
			image: user?.image,
			dateTime: new Date(),
		};
		newOrderData[field] = value;

		setReviewData(newOrderData);
	}

	const handlePurchaseProduct = e => {

		const newReview = { ...reviewData, status: { pending: "Pending", approved: "Approved" } };

		fetch('http://localhost:5000/reviews', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newReview)
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {
					alert('Review Added Successfully!');
					e.target.reset();

					const addedReview = data;
					setReviewData(addedReview);
				}
			})

		e.preventDefault();
	}

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

	// Submit Review Style
	const submitReviewBtn = {
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
				Write Your Valuable Review
			</Typography>

			<form onSubmit={handlePurchaseProduct}>
				{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} > */}

				{/* Right Side */}
				<Grid item xs={8} sx={{ fontFamily: "'Signika', sans-serif", mx: 'auto', width: '100%' }}>

					<Box>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>

							{/* User Name Field */}
							<TextField
								sx={inlineInputStyle}
								fullWidth
								id="userName"
								name="userName"
								// label="Name"
								value={user?.displayName}
								readOnly
								onBlur={handleOnBlur}
							/>

							{/* User Name Field */}
							<TextField
								sx={inlineInputStyle}
								fullWidth
								id="userEmail"
								name="userEmail"
								// label="Email"
								value={user?.email}
								readOnly
								onBlur={handleOnBlur}
							/>

						</Box>

						{/* Review Box */}
						<TextField
							sx={inputStyle}
							fullWidth
							id="comment"
							name="comment"
							label="Write Your Review"
							multiline
							required
							rows={6}
							onBlur={handleOnBlur}
						/>

						<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>

							{/* Rating Box */}
							<TextField
								sx={inlineInputStyle}
								id="rating"
								required
								select
								label="Select Rating Point"
								name="rating"
								onBlur={handleOnBlur}
							// helperText="Please select rating number"
							>
								{ratingNumbers.map((option) => (
									<MenuItem
										sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}
										key={option.value} value={option.value}
									>
										{option.label} <StarIcon sx={{ fontSize: 20, color: '#EB6D2F' }} />
									</MenuItem>
								))}
							</TextField>

							{/* Profession Field */}
							<TextField
								sx={inlineInputStyle}
								id="profession"
								name="profession"
								label="Profession"
								onBlur={handleOnBlur}
								required
							/>

							{/* Image Field */}
							<TextField
								sx={inlineInputStyle}
								type="url"
								id="image"
								name="image"
								label="Image URL"
								onBlur={handleOnBlur}
							/>
						</Box>
					</Box>

				</Grid>
				{/* </Grid> */}
				<Button sx={submitReviewBtn} type="submit" variant="contained">Submit Review</Button>
			</form>
		</Container>
	);
};

export default Review;