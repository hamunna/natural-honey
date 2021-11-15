import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../images/not-found.gif';

const NotFound = () => {
	// Login Button Style
	const backHomeBtn = {
		backgroundColor: '#5A3733',
		px: 20,
		py: 1,
		mx: 'auto',
		mb: 5,
		fontWeight: 700,
		borderRadius: '50px',
		fontFamily: "'Signika', sans-serif",
		'&:hover': {
			backgroundColor: '#EB6D2F',
			boxShadow: 'none',
		}
	}
	return (
		<div style={{ textAlign: 'center' }}>
			<img src={notFound} alt="" />
			<h1 style={{ fontSize: '200px', marginTop: '-100px' }}>404</h1>
			<h1 style={{ fontSize: '60px', marginTop: '-140px' }}>Page Not Found</h1>

			<NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">
				<Button sx={backHomeBtn} variant="contained">Back to Home</Button>
			</NavLink>
		</div>
	);
};

export default NotFound;