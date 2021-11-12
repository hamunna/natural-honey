import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, TextField, Typography } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

import googleLogin from '../../images/login-systems/google.png';
import fbLogin from '../../images/login-systems/facebook.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import bee1 from '../../images/bee-1.gif';
import bee2 from '../../images/bee-2.gif';
import formBg from '../../images/login-form-bg.jpg';
import welcomeBg from '../../images/login-welcome-bg.jpg';


const Login = () => {

	const [loginData, setLoginData] = useState([]);
	const { user, loginUser, isLoading, signInWithGoogle, error } = useAuth();

	const location = useLocation();
	const history = useHistory();

	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;

		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);

	}

	const handleLoginSubmit = e => {
		e.preventDefault();
		// setSuccessMsg('Logged In Successfully!')

		alert('Login Successfully!');
		loginUser(loginData.email, loginData.password, location, history);

		e.target.reset();
	}

	// Google SignIn
	const handleGoogleSignIn = () => {
		signInWithGoogle(location, history);
	}

	// Signup Button Style
	const loginBtn = {
		backgroundColor: '#EB6D2F',
		px: 5,
		py: 1,
		mx: 'auto',
		my: 5,
		width: '35ch',
		fontWeight: 700,
		borderRadius: '50px',
		fontFamily: "'Signika', sans-serif",
		'&:hover': {
			backgroundColor: '#5A3733',
			boxShadow: 'none',
		}
	}

	// Login Button Style
	const signupBtn = {
		backgroundColor: '#5A3733',
		px: 5,
		py: 1,
		mx: 'auto',
		my: 5,
		fontWeight: 700,
		borderRadius: '50px',
		fontFamily: "'Signika', sans-serif",
		'&:hover': {
			backgroundColor: '#EB6D2F',
			boxShadow: 'none',
		}
	}

	// Left Side bg
	const rightSideBg = {
		backgroundImage: `url(${welcomeBg})`,
		backgroundSize: 'cover',
		backgroundPosition: 'right',
		height: '700px'
	}

	// Left Bee
	const leftSideBee = {
		mt: 25,
		textAlign: 'center',
		height: '150px',
		backgroundImage: `url(${bee2})`,
		backgroundSize: '120px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'right center'

	}


	// Right Side bg
	const leftSideBg = {
		backgroundImage: `url(${formBg})`,
		backgroundSize: 'cover',
		height: '700px'
	}

	return (
		<>

			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ fontFamily: "'Signika', sans-serif" }}>

				{/* Left Side */}
				<Grid item xs={6} md={7} sx={leftSideBg}>

					<Box sx={{ textAlign: 'center', mt: 10, mx: 'auto', width: '60%' }}>

						<Typography sx={{ fontWeight: 800, color: '#EB6D2F' }} variant="h4" gutterBottom component="div">
							Login to Your Account
						</Typography>

						<Box>
							<Button onClick={handleGoogleSignIn}>
								<img style={{ height: '30px' }} src={googleLogin} alt="" />
							</Button>

							<Button>
								<img style={{ height: '30px' }} src={fbLogin} alt="" />
							</Button>

						</Box>

						<Typography variant="body" gutterBottom component="div">
							or use your email to login
						</Typography>

						<form onSubmit={handleLoginSubmit} sx={{ textAlign: 'center' }}>

							<Box sx={{ '& > :not(style)': { m: 1, px: 8 } }}>

								{/* Email Field */}
								<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
									<EmailRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
									<TextField
										id="email"
										name="email"
										type="email"
										label="Your Email"
										variant="standard"
										sx={{ width: '100%' }}
										onBlur={handleOnBlur}
									/>
								</Box>

								{/* Password Field */}
								<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
									<LockRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
									<TextField
										id="password"
										name="password"
										type="password"
										label="Password"
										variant="standard"
										sx={{ width: '100%' }}
										onBlur={handleOnBlur}
									/>
								</Box>

							</Box>

							<Button type="submit" sx={loginBtn} variant="contained">Log in</Button>

						</form>
					</Box>

				</Grid>

				{/* Right Side */}
				<Grid item xs={6} md={5} sx={rightSideBg}>

					<Box sx={leftSideBee}>
						<Typography sx={{ fontWeight: 800, color: '#5A3733' }} variant="h4" gutterBottom component="div">
							Welcome Back!
						</Typography>

						<Typography variant="body" gutterBottom component="div">
							New user in this website?
							<br />
							doesn't matter, Sign Up from the button below.
						</Typography>

						<NavLink style={{ color: 'white', textDecoration: 'none' }} to="/signup">
							<Button sx={signupBtn} variant="contained">Sign Up</Button>
						</NavLink>

					</Box>

				</Grid>
			</Grid>

		</>
	);
};

export default Login;