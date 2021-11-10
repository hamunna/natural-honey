import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, IconButton, List, ListItem, ListItemText, Typography, } from '@mui/material';
import tick from '../../../images/tick-icon.png';
import aboutImg from '../../../images/about-img.jpg';
import { typography } from '@mui/system';



const About = () => {

	const aboutBtn = {
		backgroundColor: '#5A3733',
		px: 5,
		py: 2,
		fontWeight: 700,
		borderRadius: '50px',
		fontFamily: "'Signika', sans-serif",
		'&:hover': {
			backgroundColor: '#EB6D2F',
			boxShadow: 'none',
		}
	}

	return (
		<Box sx={{ flexGrow: 1, my: 14, height: '450px' }}>

			<Container>
				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>


					<Grid item xs={2} sm={4} md={4}>

						<Typography variant="h6" sx={{ fontFamily: "'Raleway', sans-serif", color: '#EB6D2F', fontWeight: 700 }}>
							Information
						</Typography>

						<Typography variant="h3" sx={{ fontFamily: "'Signika', sans-serif", color: '#5A3733', fontWeight: 700 }}>
							About Honey
						</Typography>

						<Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'Raleway', sans-serif", my: 5 }}>
							Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great
						</Typography>

						<Button sx={aboutBtn} variant="contained">Read more</Button>


					</Grid>

					<Grid item xs={2} sm={4} md={4}>

						<img style={{ width: '100%' }} src={aboutImg} alt="" />

					</Grid>

					<Grid item xs={2} sm={4} md={4}>

						<Typography variant="h5" sx={{ fontFamily: "'Signika', sans-serif", color: '#5A3733', fontWeight: 700 }}>
							Useful properties <span style={{ color: '#EB6D2F' }}>of honey</span>
						</Typography>

						<List sx={{fontFamily: "'Signika', sans-serif", color: '#5A3733', fontSize: '14px'}}>

							<ListItem>
								<ListItemText sx={{ display: 'flex', alignItems: 'center' }}><strong>Regulates</strong> metabolic processes</ListItemText>
							</ListItem>

							<ListItem>
								<ListItemText><strong>Increases</strong> immunity</ListItemText>
							</ListItem>

							<ListItem>
								<ListItemText>Honey <strong>improves</strong> blood composition</ListItemText>
							</ListItem>

							<ListItem>
								<ListItemText><strong>Helps</strong> to cope with insomnia</ListItemText>
							</ListItem>

							<ListItem>
								<ListItemText><strong>Gives</strong> energy to the body, restores strength</ListItemText>
							</ListItem>

						</List>

					</Grid>

				</Grid>
			</Container>
		</Box>
	);
};

export default About;