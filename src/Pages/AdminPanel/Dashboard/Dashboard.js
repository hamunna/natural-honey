import * as React from 'react';
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
import MangeAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import MyOrders from '../NormalUser/MyOrders/MyOrders';

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
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#EB6D2F' }}>
				<Toolbar>
					<Typography variant="h5" noWrap component="div" sx={{fontWeight: 700, fontFamily: "'Signika', sans-serif", color: '#5A3733', textShadow: '0 0 1px white'}}>
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
						<NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">
							<Typography variant="h5" component="div" sx={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800 }}>
								Natural Honey
							</Typography>
						</NavLink>
					</Box>

					<Divider sx={{backgroundColor: 'white'}} />

					<Box>
						<List>
							<NavLink style={navLinkStyle} to="/home">
								<ListItem button>

									<ListItemIcon sx={iconStyle}>
										<HomeIcon />
									</ListItemIcon>

									<ListItemText>Home</ListItemText>
								</ListItem>
							</NavLink>
						</List>

						<List>
							<NavLink style={navLinkStyle} to="/shop">

								<ListItem button>

									<ListItemIcon sx={iconStyle}>
										<StorefrontIcon />
									</ListItemIcon>

									<ListItemText>Shop</ListItemText>
								</ListItem>
							</NavLink>
						</List>

						<List>
							<NavLink style={navLinkStyle} to="/blog">
								<ListItem button>


									<ListItemIcon sx={iconStyle}>
										<MenuBookIcon />
									</ListItemIcon>

									<ListItemText>Blog</ListItemText>
								</ListItem>
							</NavLink>
						</List>
						<Divider />
						<List>
							{['All mail', 'Trash', 'Spam'].map((text, index) => (
								<ListItem button key={text}>
									<ListItemIcon sx={iconStyle}>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							))}
						</List>
					</Box>
				</Box>
			</Drawer>


			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				
				<MangeAllOrders />

				{/* <MyOrders /> */}
			</Box>
		</Box>
	);
}