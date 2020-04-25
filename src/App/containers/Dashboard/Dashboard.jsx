import React from "react";
import { Route, Switch } from "react-router-dom";
import { Map } from "./Map";
import { Profile } from "./Profile";

export const Dashboard = (props) => {
	return (
		<>
			<Switch>
				<Route path="/dashboard/profile" component={Profile}></Route>
				<Route path="/dashboard/map" component={Map}></Route>
			</Switch>
		</>
	);
};
