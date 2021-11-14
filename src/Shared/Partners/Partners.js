import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import partner1 from '../../images/partners/partners-1.png';
import partner2 from '../../images/partners/partners-2.png';
import partner3 from '../../images/partners/partners-3.png';
import partner4 from '../../images/partners/partners-4.png';
import partner5 from '../../images/partners/partners-5.png';
import partner6 from '../../images/partners/partners-6.png';

const Clients = () => {
	return (
		<Box sx={{ height: '180px', backgroundColor: '#5A3733' }}>
			<Container>
				<Box sx={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<Box>
						<Typography variant="h5" sx={{ fontWeight: 800, fontFamily: "'Signika', Sans-serif", color: 'white' }}>Our sweet clients</Typography>
						<Typography variant="h4" sx={{ fontWeight: 800, fontFamily: "'Signika', Sans-serif", color: '#EB6D2F' }}>and partners</Typography>
					</Box>

					<Box sx={{display: 'flex', gap: 5}}>
						<Box>
							<img style={{ width: '90%' }} src={partner1} alt="" />
						</Box>

						<Box>
							<img style={{ width: '90%' }} src={partner2} alt="" />
						</Box>

						<Box>
							<img style={{ width: '90%' }} src={partner3} alt="" />
						</Box>

						<Box>
							<img style={{ width: '90%' }} src={partner4} alt="" />
						</Box>

						<Box>
							<img style={{ width: '90%' }} src={partner5} alt="" />
						</Box>

						<Box>
							<img style={{ width: '90%' }} src={partner6} alt="" />
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Clients;