import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, permited, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			permited ? <Component {...props} /> : <Redirect to="/login" />
		}
	/>
);
