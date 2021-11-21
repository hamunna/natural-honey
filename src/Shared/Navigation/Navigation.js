import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import useAuth from '../../hooks/useAuth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import RateReviewIcon from '@mui/icons-material/RateReview';
import dummyUserImg from '../../images/dummy-user-img.png';



//==================================================================================
const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-start',
}));
//=================================================================================================

const Navigation = () => {

	const { user, logOut } = useAuth();

	// ======================================================
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	// =========================================================

	const navLinkStyle = {
		color: 'gray',
		fontWeight: 700,
		fontFamily: "'Signika', sans-serif",
		textDecoration: 'none'
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar sx={{ backgroundColor: '#5A3733' }} position="relative">
				<Container>
					<Toolbar>

						<Box sx={{ mr: 'auto' }}>
							<NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">
								<Typography variant="h5" component="div" sx={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800 }}>
									Natural Honey
								</Typography>
							</NavLink>
						</Box>

						<Box sx={{ ml: 'auto' }}>

							<IconButton
								size="large"
								color="inherit"
								sx={{ mr: 2 }}
								aria-label="open drawer"
								edge="end"
								onClick={handleDrawerOpen}
								sx={{ ...(open && { display: 'none' }) }}
							>
								<MenuIcon />
							</IconButton>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			{/* //==================================================================== */}
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
					},
					zIndex: (theme) => theme.zIndex.drawer + 2
				}}
				variant="persistent"
				anchor="right"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>

				</DrawerHeader>

				<Divider />

				{
					user?.email && <List>
						<NavLink style={navLinkStyle} to="/dashboard">
							<ListItem button>

								<ListItemIcon>
									<DashboardIcon />
								</ListItemIcon>

								<ListItemText>Dashboard</ListItemText>
							</ListItem>
						</NavLink>
					</List>
				}

				<List>
					<NavLink style={navLinkStyle} to="/home">
						<ListItem button>

							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>

							<ListItemText>Home</ListItemText>
						</ListItem>
					</NavLink>
				</List>

				<List>
					<NavLink style={navLinkStyle} to="/shop">

						<ListItem button>

							<ListItemIcon>
								<StorefrontIcon />
							</ListItemIcon>

							<ListItemText>Shop</ListItemText>
						</ListItem>
					</NavLink>
				</List>

				<List>
					<NavLink style={navLinkStyle} to="/blog">
						<ListItem button>


							<ListItemIcon>
								<MenuBookIcon />
							</ListItemIcon>

							<ListItemText>Blog</ListItemText>
						</ListItem>
					</NavLink>
				</List>

				{
					user?.email && <List>
						<NavLink style={navLinkStyle} to="/dashboard/review">
							<ListItem button>


								<ListItemIcon>
									<RateReviewIcon />
								</ListItemIcon>

								<ListItemText>Review</ListItemText>
							</ListItem>
						</NavLink>
					</List>
				}

				<Divider />

				{
					!user?.email ?
						<List sx={{ mt: 'auto' }}>

							<NavLink style={navLinkStyle} to="/login">
								<ListItem button>
									<ListItemIcon>
										<LoginIcon />
									</ListItemIcon>

									<ListItemText>Login</ListItemText>
								</ListItem>
							</NavLink>

							<NavLink style={navLinkStyle} to="/signup">
								<ListItem button>
									<ListItemIcon>
										<AssignmentIcon />
									</ListItemIcon>
									<ListItemText>Register</ListItemText>
								</ListItem>
							</NavLink>
						</List>
						:
						<List sx={{ mt: 'auto' }}>
							<NavLink style={navLinkStyle} to="/login">
								<ListItem button>
									<ListItemIcon>
										<LogoutIcon />
									</ListItemIcon>

									<ListItemText onClick={logOut}>LogOut</ListItemText>
								</ListItem>
							</NavLink>
						</List>
				}

			</Drawer>
			{/* //================================================================ */}
		</Box >
	);
};

export default Navigation;