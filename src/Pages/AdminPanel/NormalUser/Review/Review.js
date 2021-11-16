import { Button, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import StarIcon from '@mui/icons-material/Star';
import { useHistory, useLocation } from 'react-router';

const Review = () => {
	const { user } = useAuth();
	
	const location = useLocation();
	const history = useHistory();

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


	const initialReviewInfo = {
		userName: user?.displayName,
		userEmail: user?.email,
		image: user?.photoURL,
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

		const newReviewData = { ...reviewData };
		newReviewData[field] = value;

		setReviewData(newReviewData);
	}

	const handleReviewSubmit = e => {

		const newReview = { ...reviewData, status: { pending: "Pending", approved: "Approved" } };

		fetch('https://natural-honey.herokuapp.com/reviews', {
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

			<form onSubmit={handleReviewSubmit}>
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
								label="Name"
								value={user?.displayName}
								readOnly
								onBlur={handleOnBlur}
							/>

							{/* User Email Field */}
							<TextField
								sx={inlineInputStyle}
								fullWidth
								id="userEmail"
								name="userEmail"
								label="Email"
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
							// onChange={minCharactersOnChange}
						/>

						{/* Alert msg */}
						<Typography id="char-remain" color="red">Text must be 100 characters</Typography>

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

							{/* Image Field
							<TextField
								sx={inlineInputStyle}
								type="url"
								id="image"
								name="image"
								value={user?.photoURL}
								label="Image URL"
								onBlur={handleOnBlur}
							/> */}
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