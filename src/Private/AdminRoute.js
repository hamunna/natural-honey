import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';
import LoadingBee from '../Shared/LoadingBee/LoadingBee';

const AdminRoute = ({ children, ...rest }) => {

	const { user, admin, isLoading } = useAuth();

	if (isLoading) { return <LoadingBee /> }
	if (!admin) { return <LoadingBee /> }
	
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user?.email && admin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;