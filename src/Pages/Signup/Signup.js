import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Grid, TextField, Typography } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

import googleLogin from '../../images/login-systems/google.png';
import fbLogin from '../../images/login-systems/facebook.png';
import bee1 from '../../images/bee-1.gif';
import bee2 from '../../images/bee-2.gif';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


const Signup = () => {

	const [loginData, setLoginData] = useState([]);
	const { registerUser, isLoading, signInWithGoogle, error } = useAuth();

	const location = useLocation();
	const history = useHistory();

	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;

		const newLoginData = { ...loginData };
		newLoginData[field] = value;

		console.log(newLoginData);
		setLoginData(newLoginData);

	}

	const handleSignUpSubmit = e => {
		e.preventDefault();
		// if (loginData.password !== loginData.password2) {
		// 	// setErrorMsg('Password doesn\'t match!');
		// 	return
		// }
		alert('Sign Up Successfully!');
		registerUser(loginData.email, loginData.password, loginData.name, history, location);
		e.target.reset();
	}

	// Handle Google Sign In
	const handleGoogleSignIn = () => {
		signInWithGoogle(location, history);
	}

	//=============================================================
	// Password Show-Hide Functions
	//=============================================================
	// const [passwordValues, setPasswordValues] = React.useState({
	// 	amount: '',
	// 	password: '',
	// 	weight: '',
	// 	weightRange: '',
	// 	showPassword: false,
	// });

	// const [confirmPasswordValues, setConfirmPasswordValues] = React.useState({
	// 	amount: '',
	// 	password: '',
	// 	weight: '',
	// 	weightRange: '',
	// 	showPassword: false,
	// });

	// const handlePasswordChange = (prop) => (event) => {
	// 	setPasswordValues({ ...passwordValues, [prop]: event.target.value });
	// };

	// const handleClickShowPassword = () => {
	// 	setPasswordValues({
	// 		...passwordValues,
	// 		showPassword: !passwordValues.showPassword,
	// 	});
	// };

	// const handleMouseDownPassword = (event) => {
	// 	event.preventDefault();
	// };

	// // Confirm Password
	// const handleConfirmPasswordChange = (prop) => (event) => {
	// 	setConfirmPasswordValues({ ...confirmPasswordValues, [prop]: event.target.value });
	// };

	// const handleClickShowConfirmPassword = () => {
	// 	setConfirmPasswordValues({
	// 		...confirmPasswordValues,
	// 		showPassword: !confirmPasswordValues.showPassword,
	// 	});
	// };

	// const handleMouseDownConfirmPassword = (event) => {
	// 	event.preventDefault();
	// };
	//=============================================================

	// Signup Button Style
	const signupBtn = {
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
	const loginBtn = {
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
	const leftBg = {
		backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-simple-honeycomb-honey-food-psd-layered-master-map-background-material-image_149656.jpg')`,
		backgroundSize: 'cover',
		height: '700px'
	}
	
	// Left Bee
	const leftBee = {
		mt: 25,
		textAlign: 'center',
		height: '150px',
		backgroundImage: `url(${bee1})`,
		backgroundSize: '120px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'left center'
		
	}

	
		// Right Side bg
		const rightBg = {
			backgroundImage: `url('https://i.pinimg.com/1200x/f2/97/28/f297286a3a4cc0a8010ae1cbfa9a079d.jpg')`,
			backgroundSize: 'cover',
			height: '700px'
		}
	
	return (
		<>

			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ fontFamily: "'Signika', sans-serif" }}>

				{/* Left Side */}
				<Grid item xs={6} md={5} sx={leftBg}>

					<Box sx={leftBee}>
						<Typography sx={{ fontWeight: 800, color: '#5A3733' }} variant="h4" gutterBottom component="div">
							Welcome Back!
						</Typography>

						<Typography variant="body" gutterBottom component="div">
							Already have an account?
							<br />
							please login from the button below.
						</Typography>

						<NavLink style={{ color: 'white', textDecoration: 'none' }} to="/login">
						
						<Button sx={loginBtn} variant="contained">Log in</Button>
						</NavLink>

					</Box>

				</Grid>

				{/* Right Side */}
				<Grid item xs={6} md={7} sx={rightBg}>

					<Box sx={{ textAlign: 'center', mt: 10, mx: 'auto', width: '60%' }}>

						<Typography sx={{ fontWeight: 800, color: '#EB6D2F' }} variant="h4" gutterBottom component="div">
							Create New Account
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
							or use your email for registration
						</Typography>

						<form onSubmit={handleSignUpSubmit} sx={{ textAlign: 'center' }}>

							<Box sx={{ '& > :not(style)': { m: 1, px: 8 } }}>

								{/* Name Field */}
								<Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
									<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
									<TextField
										id="name"
										name="name"
										type="text"
										label="Full Name"
										variant="standard"
										sx={{ width: '100%' }}
										onBlur={handleOnBlur}
									/>
								</Box>


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


								{/* Confirm Password Field */}
								<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
									<LockRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
									<TextField
										id="confirmPassword"
										name="confirmPassword"
										type="password"
										label="Confirm Password"
										variant="standard"
										sx={{ width: '100%' }}
										onBlur={handleOnBlur}
									/>
								</Box>

							</Box>

							<Button type="submit" sx={signupBtn} variant="contained">Sign up</Button>


						</form>
					</Box>

				</Grid>
			</Grid>




		</>
	);
};

export default Signup;