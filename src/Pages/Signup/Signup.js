import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

import googleLogin from '../../images/login-systems/google.png';
import fbLogin from '../../images/login-systems/facebook.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import bee1 from '../../images/bee-1.gif';
import bee2 from '../../images/bee-2.gif';
import formBg from '../../images/signup-form-bg.jpg';
import welcomeBg from '../../images/signup-welcome-bg.jpg';



const Signup = () => {

	const [loginData, setLoginData] = useState([]);
	const { registerUser, isLoading, signInWithGoogle, authSignUpError, authGoogleError, setAuthSignUpError, authSuccess, setAuthSuccess } = useAuth();
	const [isVisible, setIsVisible] = React.useState(false);
	// const [passwordValidation, setPasswordValidation] = useState('');

	useEffect(() => {
			// message is empty (meaning no errors). Adjust as needed
			if(!authSignUpError && !authSuccess){
			 setIsVisible(false)
			 return
			}
			// error exists. Display the message and hide after 5 secs
			setIsVisible(true)
			const timer = setTimeout(() => {
			  setIsVisible(false)
			}, 5000);
			return () => clearTimeout(timer);
		  }, [authSignUpError, authSuccess]) // executes every time `message` changes. Adjust as needed

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
		const pass = document.getElementById('password').value;
		const confirmPass = document.getElementById('confirmPassword').value;
		const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

		if (!passwordValidation.test(pass)) {
			setAuthSuccess('');
			setAuthSignUpError('Password must be 8 character with letter & number combination');
			return;
		}
		if (pass !== confirmPass) {
			setAuthSuccess('');
			setAuthSignUpError('Password doesn\'t match!');
			return;
		}

		setAuthSuccess('Sign Up Successfully!');
		setAuthSignUpError('');
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
		backgroundImage: `url(${welcomeBg})`,
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
		backgroundImage: `url(${formBg})`,
		backgroundSize: 'cover',
		height: '700px'
	}

	const comingSoon = () => {
		alert('Facebook Authentication coming soon...');
	}

	return (
		<>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ fontFamily: "'Signika', sans-serif" }}>

				{/* Left Side */}
				<Grid item xs={6} md={5} sx={leftBg}>

					<Box sx={leftBee}>
						<Typography sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 800, color: '#5A3733' }} variant="h4" gutterBottom component="div">
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

						<Typography sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 800, color: '#EB6D2F' }} variant="h4" gutterBottom component="div">
							Create New Account
						</Typography>

						{/* Google Alert msg Start */}
						{authGoogleError &&
							<Box sx={{ width: '90%', mx: 'auto' }}>
								<Alert
									variant="filled"
									severity="error"
									sx={{ my: 2 }}
								>
									{authGoogleError}
								</Alert>
							</Box>
						}
						{/* Google Alert msg END */}

						<Box>
							<Button onClick={handleGoogleSignIn}>
								<img style={{ height: '36px' }} src={googleLogin} alt="" />
							</Button>

							<Button onClick={comingSoon}>
								<img style={{ height: '36px' }} src={fbLogin} alt="" />
							</Button>

						</Box>

						<Typography variant="body" gutterBottom component="div">
							or use your email for registration
						</Typography>

						{isLoading && <Typography sx={{ color: 'crimson'}}>Loading...</Typography>}
						
						{/* Error Alert msg Start */}
						{ isVisible && authSignUpError &&
							<Box sx={{ width: '90%', mx: 'auto' }}>
								<Alert
									variant="filled"
									severity="error"
									sx={{ my: 2 }}
								>
									{authSignUpError}
								</Alert>
							</Box>
						}
						{/* Error Alert msg END */}
						
						{/* Success Alert msg Start */}
						{ isVisible && authSuccess && !isLoading &&
							<Box sx={{ width: '90%', mx: 'auto' }}>
								<Alert
									variant="filled"
									severity="success"
									sx={{ my: 2 }}
								>
									{authSuccess}
								</Alert>
							</Box>
						}
						{/* Success Alert msg END */}

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
										required
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
										required
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
										required
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
										required
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