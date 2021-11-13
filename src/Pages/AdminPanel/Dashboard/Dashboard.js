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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MyOrders from '../NormalUser/MyOrders/MyOrders';
import Review from '../NormalUser/Review/Review';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import AddNewProduct from '../Admin/AddNewProduct/AddNewProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import Payment from '../NormalUser/Payment/Payment';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';

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
	let { path, url } = useRouteMatch();

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, backgroundColor: '#5A3733' }}>
				<Toolbar>
					<Typography variant="h6" noWrap component="div" sx={{ fontWeight: 600, fontFamily: "'Raleway', sans-serif", color: '#fff', textShadow: '0 0 1px white' }}>
						Dashboard
					</Typography>
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
							<NavLink style={navLinkStyle} to={`${url}`}>
								<ListItem button>

									<ListItemIcon sx={iconStyle}>
										<HomeIcon />
									</ListItemIcon>

									<ListItemText>Dashboard</ListItemText>
								</ListItem>
							</NavLink>
						</List>

						<List>
							<NavLink style={navLinkStyle} to={`${url}/manageProducts`}>

								<ListItem button>

									<ListItemIcon sx={iconStyle}>
										<StorefrontIcon />
									</ListItemIcon>

									<ListItemText>Manage Products</ListItemText>
								</ListItem>
							</NavLink>
						</List>

						<List>
							<NavLink style={navLinkStyle} to={`${url}/manageAllOrders`}>

								<ListItem button>

									<ListItemIcon sx={iconStyle}>
										<StorefrontIcon />
									</ListItemIcon>

									<ListItemText>Manage All Orders</ListItemText>
								</ListItem>
							</NavLink>
						</List>

						<List>
							<NavLink style={navLinkStyle} to={`${url}/addNewProduct`}>
								<ListItem button>


									<ListItemIcon sx={iconStyle}>
										<MenuBookIcon />
									</ListItemIcon>

									<ListItemText>Add New Product</ListItemText>
								</ListItem>
							</NavLink>
						</List>

						<List>
							<NavLink style={navLinkStyle} to={`${url}/makeAdmin`}>
								<ListItem button>


									<ListItemIcon sx={iconStyle}>
										<MenuBookIcon />
									</ListItemIcon>

									<ListItemText>Make Admin</ListItemText>
								</ListItem>
							</NavLink>
						</List>

						<Divider />

						<List>
							<NavLink style={navLinkStyle} to={`${url}/myOrders`}>
								<ListItem button>


									<ListItemIcon sx={iconStyle}>
										<MenuBookIcon />
									</ListItemIcon>

									<ListItemText>My Orders</ListItemText>
								</ListItem>
							</NavLink>
						</List>

						<List>
							<NavLink style={navLinkStyle} to={`${url}/review`}>
								<ListItem button>


									<ListItemIcon sx={iconStyle}>
										<MenuBookIcon />
									</ListItemIcon>

									<ListItemText>Review</ListItemText>
								</ListItem>
							</NavLink>
						</List>

						<List>
							<NavLink style={navLinkStyle} to={`${url}/payment`}>
								<ListItem button>


									<ListItemIcon sx={iconStyle}>
										<MenuBookIcon />
									</ListItemIcon>

									<ListItemText>Payment</ListItemText>
								</ListItem>
							</NavLink>
						</List>
					</Box>
				</Box>
			</Drawer>


			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />

				<Switch>

					<Route exact path={path}>
						<DashboardHome />
					</Route>

					<Route path={`${path}/manageProducts`}>
						<ManageProducts />
					</Route>

					<Route path={`${path}/manageAllOrders`}>
						<ManageAllOrders />
					</Route>

					<Route path={`${path}/addNewProduct`}>
						<AddNewProduct />
					</Route>

					<Route path={`${path}/makeAdmin`}>
						<MakeAdmin />
					</Route>

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