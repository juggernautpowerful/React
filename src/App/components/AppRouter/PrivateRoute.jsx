import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, permited, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			permited ? <Component {...props} /> : <Redirect to="/login" />
		}
	/>
);

PrivateRoute.propTypes = {
	permited: PropTypes.bool.isRequired
  };