import React, { useState } from 'react';
import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';


const MakeAdmin = () => {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);

	const handleOnBlur = e => {
		setEmail(e.target.value);
	}

	const handleAdminSubmit = e => {

		const user = { email };
		fetch('https://natural-honey.herokuapp.com/users/admin', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then(res => res.json())
			.then(data => {
				// setEmail('');
				setSuccess(true);
			});

		e.preventDefault();
	}

	// Submit Review Style
	const makeAdminBtn = {
		backgroundColor: '#EB6D2F',
		fontWeight: 700,
		fontFamily: "'Signika', sans-serif",
		'&:hover': {
			backgroundColor: '#5A3733',
			boxShadow: 'none',
		}
	}

	return (
		<Box sx={{ textAlign: 'center' }}>
			<Typography sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 800, color: '#5A3733' }} variant="h4" gutterBottom component="div">
				Make Admin
			</Typography>


			<form onSubmit={handleAdminSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
				<TextField
					// fullWidth
					name="admin"
					id="admin"
					label="Email"
					variant="outlined"
					onBlur={handleOnBlur}
				/>
				<br />
				<Button type="submit" variant="contained" sx={makeAdminBtn}>Make Admin</Button>
			</form>
				{success && <Alert sx={{ width: '40%', mx: 'auto', my: 4 }} severity="success">Made Admin Successfully!</Alert>}
		</Box>
	);
};

export default MakeAdmin;