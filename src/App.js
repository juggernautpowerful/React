import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { isAuthSelector } from "./App/store/selectors";
import { Route, Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from "./App/components/AppRouter/PrivateRoute";
import AppRouter from "./App/components/AppRouter";
import Login from "./App/containers/Login";
import { SignIn } from "./App/containers/SignIn";
import { actions } from "./App/store/duck";

import { Grid, Paper } from "@material-ui/core";
import Background from "./Images/login-background.jpg";
import { Logo } from "loft-taxi-mui-theme";

const mapStateToProps = (state) => ({
	isAuth: isAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	checkIsLogin: () => dispatch(actions.checkIsLogin()),
});

class App extends React.Component {
	componentDidMount() {
		const { checkIsLogin } = this.props;
		checkIsLogin();
	}

	render() {
		const { isAuth } = this.props;
		return (
			<div>
				<Switch>
					<PrivateRoute
						path="/dashboard"
						permited={isAuth}
						component={AppRouter}
					/>
					<Paper
						elevation={1}
						style={{
							backgroundSize: "cover",
							backgroundImage: `url(${Background})`,
						}}
					>
						<Grid
							container
							alignItems="center"
							justify="center"
							style={{ minHeight: "100vh" }}
						>
							<Grid item xs={3}>
								<Logo animated />
							</Grid>
							<Grid item xs={3}>
								<Paper
									elevation={1}
									style={{
										padding: "44px 60px",
										minWidth: "500px",
										marginTop: "48px",
										marginBottom: "48px",
									}}
								>
									<Route path="/login" component={Login} />
									<Route path="/signin" component={SignIn} />
									<Redirect to="/login" />
								</Paper>
							</Grid>
						</Grid>
					</Paper>
				</Switch>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
