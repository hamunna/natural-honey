import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function MangeAllOrders() {

	const [orders, setOrders] = React.useState([]);
	React.useEffect(() => {
		fetch('http://localhost:5000/allOrders')
			.then(res => res.json())
			.then(data => setOrders(data));
	}, []);

	return (
		<Box>
			<Typography sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 800, color: '#5A3733' }} variant="h3" gutterBottom component="div">
				Manage All Orders
			</Typography>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead sx={{ backgroundColor: '#5A3733' }}>
						<TableRow>
							<StyledTableCell>Product Name</StyledTableCell>
							<StyledTableCell align="left">Price &#36;</StyledTableCell>
							<StyledTableCell align="left">Order Time</StyledTableCell>
							<StyledTableCell align="left">Order Email</StyledTableCell>
							<StyledTableCell align="left">Status</StyledTableCell>
							<StyledTableCell align="center">Action</StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{orders.map((order) => (
							<StyledTableRow key={order._id}>

								<StyledTableCell component="th" scope="row">
									{order.productName}
								</StyledTableCell>

								<StyledTableCell align="left">&#36;{order.price}</StyledTableCell>
								<StyledTableCell align="left">{order.dateTime}</StyledTableCell>
								<StyledTableCell align="left">{order.userEmail}</StyledTableCell>
								<StyledTableCell  sx={{color: 'olive'}} align="left">Pending</StyledTableCell>

								<StyledTableCell align="center" sx={{display: 'flex', gap: 1, justifyContent: 'center'}}>
									<Button variant="contained" color="error" size="small" sx={{fontSize: 12}}>Delete</Button>
									<Button variant="contained" color="success" size="small" sx={{fontSize: 12}}>Accept</Button>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}