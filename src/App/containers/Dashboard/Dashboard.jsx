import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Map } from "./Map";
import { Profile } from "./Profile";
import { actions } from "../../store/Card";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
	cardGet: () => dispatch(actions.cardGet()),
});

const Dashboard = (props) => {
	useEffect(() => {
		props.cardGet();
	}, []);

	return (
		<>
			<Switch>
				<Route path="/dashboard/profile" component={Profile}></Route>
				<Route path="/dashboard/map" component={Map}></Route>
			</Switch>
		</>
	);
};

const connectedDashboard = connect(null, mapDispatchToProps)(Dashboard);
export { connectedDashboard as Dashboard };
