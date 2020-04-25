import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Map } from "./Map";
import { Profile } from "./Profile";
// import { connect } from "react-redux";
// import { actions } from "./Profile/store/duck";

// const mapDispatchToProps = (dispatch) => ({
// 	checkIsCard: () => dispatch(actions.checkIsCard()),
// });

export const Dashboard = (props) => {
	// useEffect(() => {
	// 	const { checkIsCard } = props;
	// 	checkIsCard();
	// });

	return (
		<>
			<Switch>
				<Route path="/dashboard/profile" component={Profile}></Route>
				<Route path="/dashboard/map" component={Map}></Route>
			</Switch>
		</>
	);
};

// const connectedDashboard = connect(null, mapDispatchToProps)(Dashboard);
// export { connectedDashboard as Dashboard };
