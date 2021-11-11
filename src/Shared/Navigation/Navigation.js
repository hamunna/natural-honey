import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

//==================================================================================
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginRight: -drawerWidth,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginRight: 0,
		}),
	}),
);

// const AppBar = styled(MuiAppBar, {
// 	shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
// 	transition: theme.transitions.create(['margin', 'width'], {
// 		easing: theme.transitions.easing.sharp,
// 		duration: theme.transitions.duration.leavingScreen,
// 	}),
// 	...(open && {
// 		width: `calc(100% - ${drawerWidth}px)`,
// 		transition: theme.transitions.create(['margin', 'width'], {
// 			easing: theme.transitions.easing.easeOut,
// 			duration: theme.transitions.duration.enteringScreen,
// 		}),
// 		marginRight: drawerWidth,
// 	}),
// }));

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

	//======================================================
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	//=========================================================

	const navLinkStyl = {
		color: 'white',
		fontWeight: 700,
		fontFamily: "'Signika', sans-serif",
		margin: 'auto 10px',
		textDecoration: 'none'
	}
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar sx={{ backgroundColor: '#5A3733' }} position="fixed">
				<Container>
					<Toolbar sx={{}}>

						<Box sx={{ mr: 'auto' }}>
							<NavLink style={{ color: 'pink', textDecoration: 'none' }} to="/">
								<Typography variant="h5" component="div" sx={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800 }}>
									Natural-Honey
								</Typography>
							</NavLink>
						</Box>

						<Box>
							<NavLink style={navLinkStyl} as={HashLink} to="/home#banner">Home</NavLink>
							<NavLink style={navLinkStyl} as={HashLink} to="/home#products">Products</NavLink>
							<NavLink style={navLinkStyl} as={HashLink} to="/home#about">About</NavLink>
							<NavLink style={navLinkStyl} as={HashLink} to="/home#testimonials">Testimonials</NavLink>
						</Box>

						<Box sx={{ ml: 'auto' }}>
							<NavLink style={{ color: 'white', textDecoration: 'none' }} to="/login"><Button color="inherit">Login</Button></NavLink>

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

			//====================================================================
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
					},
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
				<List>
					{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			//================================================================
		</Box>
	);
};

export default Navigation;