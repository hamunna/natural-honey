import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch
} from "react-router-dom";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MyOrders from '../NormalUser/MyOrders/MyOrders';
import Review from '../NormalUser/Review/Review';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import AddNewProduct from '../Admin/AddNewProduct/AddNewProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import Payment from '../NormalUser/Payment/Payment';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../../Private/AdminRoute';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EventIcon from '@mui/icons-material/Event';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import LogoutIcon from '@mui/icons-material/Logout';
import dummyUserImg from '../../../images/dummy-user-img.png';

const drawerWidth = 240;
const navLinkStyle = {
	color: 'white',
	fontWeight: 700,
	fontFamily: "'Signika', sans-serif",
	textDecoration: 'none'
}
const iconStyle = {
	color: 'white',
}
export default function Dashboard() {
	const { user, logOut, admin } = useAuth();
	let { path, url } = useRouteMatch();

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, backgroundColor: '#5A3733' }}>
				<Toolbar>
					<Typography variant="h6" noWrap component="div" sx={{ fontWeight: 600, fontFamily: "'Raleway', sans-serif", color: '#fff', textShadow: '0 0 1px white' }}>
						Dashboard
					</Typography>

					<Box sx={{ ml: 'auto', display: 'flex', gap: 3, alignItems: 'center' }}>
						<Typography sx={{ color: 'white' }}><span style={{ fontWeight: 800 }}>Hey,</span> {user?.displayName}</Typography>

						{/* {user?.image ?
							<img style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #EB6D2F', padding: '1px' }} src={user?.image} alt="" />
							:
							<img style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #EB6D2F', padding: '1px' }} src={dummyUserImg} alt="" />
						} */}

						<img style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #EB6D2F', padding: '1px' }} src={user?.photoURL || dummyUserImg} alt="" />

					</Box>


				</Toolbar>
			</AppBar>

			<Drawer
				variant="permanent"
				anchor="left"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#5A3733' },
				}}
			>
				{/* <Toolbar /> */}
				<Box sx={{ overflow: 'auto' }}>

					<Box sx={{ mx: 2, my: 2 }}>
						<NavLink style={{ color: 'white', textDecoration: 'none' }} to="/home">
							<Typography variant="h5" component="div" sx={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800 }}>
								Natural Honey
							</Typography>
						</NavLink>
					</Box>

					<Divider sx={{ backgroundColor: 'white' }} />

					<Box>
						<List>
							<NavLink style={navLinkStyle} to="/">
								<ListItem button>

									<ListItemIcon sx={iconStyle}>
										<HomeIcon />
									</ListItemIcon>

									<ListItemText>Home</ListItemText>
								</ListItem>
							</NavLink>
							{/* </List> */}
							<NavLink style={navLinkStyle} to={`${url}`}>
								<ListItem button>

									<ListItemIcon sx={iconStyle}>
										<DashboardIcon />
									</ListItemIcon>

									<ListItemText>Dashboard</ListItemText>
								</ListItem>
							</NavLink>
							{/* </List> */}

							{admin ?
								<Box>
									<>
										{/* <List> */}
										<NavLink style={navLinkStyle} to={`${url}/manageProducts`}>

											<ListItem button>

												<ListItemIcon sx={iconStyle}>
													<PivotTableChartIcon />
												</ListItemIcon>

												<ListItemText>Manage Products</ListItemText>
											</ListItem>
										</NavLink>
										{/* </List> */}

										{/* <List> */}
										<NavLink style={navLinkStyle} to={`${url}/manageAllOrders`}>

											<ListItem button>

												<ListItemIcon sx={iconStyle}>
													<EventIcon />
												</ListItemIcon>

												<ListItemText>Manage All Orders</ListItemText>
											</ListItem>
										</NavLink>
										{/* </List> */}

										{/* <List> */}
										<NavLink style={navLinkStyle} to={`${url}/addNewProduct`}>
											<ListItem button>


												<ListItemIcon sx={iconStyle}>
													<AddShoppingCartIcon />
												</ListItemIcon>

												<ListItemText>Add New Product</ListItemText>
											</ListItem>
										</NavLink>
										{/* </List> */}

										{/* <List> */}
										<NavLink style={navLinkStyle} to={`${url}/makeAdmin`}>
											<ListItem button>


												<ListItemIcon sx={iconStyle}>
													<PersonAddAlt1Icon />
												</ListItemIcon>

												<ListItemText>Make Admin</ListItemText>
											</ListItem>
										</NavLink>
										{/* </List> */}

										{/* <Divider sx={{ backgroundColor: 'white' }} /> */}
										{/* <Divider /> */}
									</>
								</Box>

								:
								<>
									{/* <List> */}
									<NavLink style={navLinkStyle} to={`${url}/myOrders`}>
										<ListItem button>


											<ListItemIcon sx={iconStyle}>
												<ShoppingBasketIcon />
											</ListItemIcon>

											<ListItemText>My Orders</ListItemText>
										</ListItem>
									</NavLink>
									{/* </List> */}

									{/* <List> */}
									<NavLink style={navLinkStyle} to={`${url}/review`}>
										<ListItem button>


											<ListItemIcon sx={iconStyle}>
												<RateReviewIcon />
											</ListItemIcon>

											<ListItemText>Review</ListItemText>
										</ListItem>
									</NavLink>
									{/* </List> */}

									{/* <List> */}
									<NavLink style={navLinkStyle} to={`${url}/payment`}>
										<ListItem button>


											<ListItemIcon sx={iconStyle}>
												<PaymentIcon />
											</ListItemIcon>

											<ListItemText>Payment</ListItemText>
										</ListItem>
									</NavLink>
								</>

							}

						</List>

						{user?.email &&
							<Box sx={{ mt: 'auto' }}>
								<Divider sx={{ backgroundColor: 'white' }} />

								<List sx={{ display: 'block', mt: 'auto' }}>
									<NavLink style={navLinkStyle} to="/login">
										<ListItem button>
											<ListItemIcon>
												<LogoutIcon sx={iconStyle} />
											</ListItemIcon>

											<ListItemText onClick={logOut}>LogOut</ListItemText>
										</ListItem>
									</NavLink>
								</List>
							</Box>
						}
					</Box>
				</Box>
			</Drawer>


			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />

				<Switch>

					<Route exact path={path}>
						<DashboardHome />
					</Route>

					<AdminRoute path={`${path}/manageProducts`}>
						<ManageProducts />
					</AdminRoute>

					<AdminRoute path={`${path}/manageAllOrders`}>
						<ManageAllOrders />
					</AdminRoute>

					<AdminRoute path={`${path}/addNewProduct`}>
						<AddNewProduct />
					</AdminRoute>

					<AdminRoute path={`${path}/makeAdmin`}>
						<MakeAdmin />
					</AdminRoute>

					<Route path={`${path}/myOrders`}>
						<MyOrders />
					</Route>

					<Route path={`${path}/review`}>
						<Review />
					</Route>

					<Route path={`${path}/payment`}>
						<Payment />
					</Route>

				</Switch>

			</Box>
		</Box>
	);
}