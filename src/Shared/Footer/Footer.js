import React from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Partners from '../Partners/Partners';
// import './Footer.css';

const Footer = () => {
	const linkStyle = {
		textDecoration: 'none',
		color: 'white',
		fontSize: 16,
		fontWeight: 600,
		color: '#EB6D2F',
		fontFamily: "'Signika', sans-serif"
	}
	return (
		<>
			<Partners />
			<footer style={{ backgroundColor: '#F7EFCB', backgroundSize: 'cover', borderTop: '1px solid #EB6D2F' }}>
				<Container>
					{/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}
						<Grid sx={{ my: 5, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>


							{/* Services */}
							<Box sx={{ mt: 3, fontFamily: "'Raleway', sans-serif",  }} >

								<Typography variant="h6" sx={{ fontWeight: 700, color: '#5A3733' }}>Services</Typography>
								<p><small><a href="#" style={linkStyle}>Honey Production</a></small></p>
								<p><small><a href="#" style={linkStyle}>Warm Removal</a></small></p>
								<p><small><a href="#" style={linkStyle}>Honey Shop</a></small></p>
								<p><small><a href="#" style={linkStyle}>Beekeeping Classes</a></small></p>

							</Box>

							{/* Useful Links */}
							<Box sx={{ mt: 3, fontFamily: "'Raleway', sans-serif",  }} >


								<Typography variant="h6" sx={{ fontWeight: 700, color: '#5A3733', fontFamily: "'Raleway', sans-serif" }}>Useful Links</Typography>
								<p><small><a href="#" style={linkStyle}>About Us</a></small></p>
								<p><small><a href="#" style={linkStyle}>Shop</a></small></p>
								<p><small><a href="#" style={linkStyle}>Terms &amp; Policy</a></small></p>
								<p><small><a href="#" style={linkStyle}>Contact Us</a></small></p>
								<p><small><a href="#" style={linkStyle}>Affiliation</a></small></p>

							</Box>

							{/* Address and Social Icons */}
							{/* <Grid sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', mt: 3 }}> */}

							{/* Health Support */}
							<Box sx={{ mt: 3, fontFamily: "'Raleway', sans-serif",  }} >


								<Typography variant="h6" sx={{ fontWeight: 700, color: '#5A3733', fontFamily: "'Raleway', sans-serif" }}>Support</Typography>
								<p><small><a href="#" style={linkStyle}>Help</a></small></p>
								<p><small><a href="#" style={linkStyle}>Terms of Service</a></small></p>
								<p><small><a href="#" style={linkStyle}>Privacy Policy</a></small></p>
								<p><small><a href="#" style={linkStyle}>Our Pricing</a></small></p>
								<p><small><a href="#" style={linkStyle}>Testimonials</a></small></p>

							</Box>

							<Box sx={{ mt: 3, fontFamily: "'Raleway', sans-serif",  }} >


								<Typography variant="h5">
									<Link to="/home" style={{ textDecoration: 'none', fontFamily: "'Signika', sans-serif" }}>
										<span style={{ color: '#5A3733', fontWeight: 800, fontFamily: "'Raleway', sans-serif" }}>Natural</span>
										<span style={{ color: '#EB6D2F', fontWeight: 800, fontFamily: "'Raleway', sans-serif" }}>Honey</span>
									</Link>
								</Typography>

								<Typography sx={{ color: '#5A3733', fontFamily: "'Signika', sans-serif", my: 1 }}>
									<small><strong>Location: </strong>South Surma, Sylhet</small>
								</Typography>

								<Typography sx={{ color: '#5A3733', fontFamily: "'Signika', sans-serif", my: 1 }}>
									<small><strong>Phone-1: </strong>+8801787654321</small>
									<br />
									<small><strong>Phone-2: </strong>+8801943218765</small>
								</Typography>

								<Typography sx={{ color: '#5A3733', fontFamily: "'Signika', sans-serif", my: 1 }}><small><strong>Email: </strong>info@naturalhoney.com</small></Typography>

								<Grid sx={{ display: 'flex', gap: 2, mt: 2 }}>
									<SocialIcon bgColor="#5A3733" url="https://www.facebook.com" style={{ height: 30, width: 30 }} />
									<SocialIcon bgColor="#5A3733" url="https://www.twitter.com" style={{ height: 30, width: 30 }} />
									<SocialIcon bgColor="#5A3733" url="https://www.linkedin.com" style={{ height: 30, width: 30 }} />
									<SocialIcon bgColor="#5A3733" url="https://www.pinterest.com" style={{ height: 30, width: 30 }} />
								</Grid>

							</Box>

						</Grid>
					{/* </Grid> */}
				</Container>

				<Container>
					<Grid sx={{ py: 2, borderTop: '1px dashed #5A3733', textAlign: 'center', fontFamily: "'Signika', sans-serif", color: '#5A3733' }}>
						<p>Copyright &copy; 2021 &bull; <span style={{ color: '#5A3733', fontWeight: 800, fontFamily: "'Raleway', sans-serif" }}>Natural</span>
							<span style={{ color: '#EB6D2F', fontWeight: 800, fontFamily: "'Raleway', sans-serif" }}>Honey</span> &bull; all rights reserved.</p>
					</Grid>
				</Container>
			</footer >
		</>
	);
};

export default Footer;