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

export default function MangeProducts() {
	const { user, isLoading, setIsLoading } = useAuth();
	const [products, setProducts] = React.useState([]);
	const history = useHistory();

	// Getting Data by Query
	React.useEffect(() => {
		fetch('http://localhost:5000/products')
			.then(res => res.json())
			.then(data => setProducts(data))
	}, []);

	// Update Order to Complete
	const handleOrderComplete = id => {

		const update = window.confirm('Are you sure?');

		if (update) {

			const url = `http://localhost:5000/products/${id}`;
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
					setProducts(products);
					alert('Updated Successfully!');
				});
			window.location.reload();
		}

	}

	// Deleting Data
	const handleDeleteProduct = id => {
		const proceed = window.confirm('Are you sure?');

		if (proceed) {
			const url = `http://localhost:5000/products/${id}`;
			fetch(url, {
				method: 'DELETE'
			})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					if (data.deletedCount > 0) {
						alert('deleted successfully!');
						const remainingOrders = products.filter(order => order._id !== id)
						setProducts(remainingOrders);
					}
				})
		}

	}

	let sl = 1;
	const comingSoon = () => {
		alert('Edit option coming soon...');
	}

	if (isLoading) { return <LoadingBee /> }

	return (
		<Box>
			<Typography sx={{ fontFamily: "'Signika', sans-serif", fontWeight: 800, color: '#5A3733' }} variant="h3" gutterBottom component="div">
				Manage Products: {products.length}
			</Typography>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead sx={{ backgroundColor: '#5A3733' }}>
						<TableRow>
							<StyledTableCell align="left">SL#</StyledTableCell>
							<StyledTableCell>Product Name</StyledTableCell>
							<StyledTableCell align="left">Image</StyledTableCell>
							<StyledTableCell align="left">Basic Price &#36;</StyledTableCell>
							<StyledTableCell align="left">Discount Price &#36;</StyledTableCell>
							<StyledTableCell align="center">Actions</StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{products.map((product) => (
							<StyledTableRow key={product?._id}>

								<StyledTableCell align="left">{sl++}</StyledTableCell>

								<StyledTableCell component="th" scope="row">
									{product?.name}
								</StyledTableCell>

								<StyledTableCell align="left"><img style={{ width: '60px' }} src={product?.image} alt="" /></StyledTableCell>

								<StyledTableCell align="left">&#36;{product?.basicPrice}</StyledTableCell>
								<StyledTableCell align="left">&#36;{product?.discountPrice}</StyledTableCell>

								<StyledTableCell align="center" sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
									<DeleteIcon
										variant="contained"
										color="error"
										sx={{ cursor: 'pointer' }}
										onClick={() => handleDeleteProduct(product._id)}
									/>

									<AssignmentTurnedInIcon
										variant="contained"
										color="success"
										sx={{ cursor: 'pointer' }}
										// onClick={() => handleOrderComplete(product._id)}
										onClick={comingSoon}
									/>
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