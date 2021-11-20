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
import { Alert, Button, CircularProgress, Typography } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router';
import LoadingBee from '../../../../Shared/LoadingBee/LoadingBee';

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

export default function MangeAllOrders() {
	const { user } = useAuth();
	const [orders, setOrders] = React.useState([]);
	const history = useHistory();
	const [isLoading, setIsLoading] = React.useState(true);

	// Getting Data by Query
	React.useEffect(() => {
		fetch('https://natural-honey.herokuapp.com/allOrders/list?list=listed')
			.then(res => res.json())
			.then(data => setOrders(data))
			.finally(() => setIsLoading(false));
	}, []);

	// Update Order to Complete
	const handleOrderComplete = id => {

		const update = window.confirm('Are you sure?');

		if (update) {

			const url = `https://natural-honey.herokuapp.com/allOrders/${id}`;
			fetch(url, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({})
			})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					setOrders(orders);
					alert('Updated Successfully!');
					window.location.reload();
				});
		}
	}

	// Deleting Data
	const handleDeleteOrder = id => {
		const proceed = window.confirm('Are you sure?');

		if (proceed) {
			const url = `https://natural-honey.herokuapp.com/allOrders/${id}`;
			fetch(url, {
				method: 'DELETE'
			})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					if (data.deletedCount > 0) {
						alert('deleted successfully!');
						const remainingOrders = orders.filter(order => order._id !== id)
						setOrders(remainingOrders);
					}
				})
		}

	}

	let sl = 1;

		if (isLoading) { return <LoadingBee /> }

	return (
		<Box>
			<Typography sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 800, color: '#5A3733' }} variant="h3" gutterBottom component="div">
				Manage All Orders: {orders.length}
			</Typography>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead sx={{ backgroundColor: '#5A3733' }}>
						<TableRow>
							<StyledTableCell align="left">SL#</StyledTableCell>
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
							<StyledTableRow key={order?._id}>

								<StyledTableCell align="left">{sl++}</StyledTableCell>

								<StyledTableCell component="th" scope="row">
									{order?.productName}
								</StyledTableCell>

								<StyledTableCell align="left">&#36;{order?.price}</StyledTableCell>
								<StyledTableCell align="left">{order?.dateTime}</StyledTableCell>
								<StyledTableCell align="left">{order?.userEmail}</StyledTableCell>

								{order?.status !== "Complete" ? 
									<StyledTableCell sx={{ color: 'orange', fontWeight: 700 }} align="left">{order?.status}</StyledTableCell>
									:
									<StyledTableCell sx={{ color: 'green', fontWeight: 700 }} align="left">{order?.status}</StyledTableCell>
							}

								<StyledTableCell align="center" sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
									<DeleteIcon
										variant="contained"
										color="error"
										sx={{ cursor: 'pointer' }}
										onClick={() => handleDeleteOrder(order._id)}
									/>

									{order?.status !== "Complete" ?
										<AssignmentTurnedInIcon
											variant="contained"
											color="success"
											sx={{ cursor: 'pointer' }}
											onClick={() => handleOrderComplete(order._id)}
										/>
										:
										<AssignmentTurnedInIcon
											variant="contained"
											color="warning"
										/>
									}

								</StyledTableCell>
							</StyledTableRow>
							// <Alert severity="error">No Order Available!</Alert>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}