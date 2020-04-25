import React from "react";
import { connect } from "react-redux";
import { isAuthSelector } from "./App/containers/Login/store/selectors";
import { Route, Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from "./App/components/AppRouter/PrivateRoute";
import AppRouter from "./App/components/AppRouter";
import Login from "./App/containers/Login";
import { SignIn } from "./App/containers/SignIn";
import { actions } from "./App/containers/Login/store/duck";

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
			<>
				<Switch>
					<PrivateRoute
						path="/dashboard"
						permited={isAuth}
						component={AppRouter}
					/>

					<Route path="/login" component={Login} />
					<Route path="/signin" component={SignIn} />
					<Redirect to="/login" />
				</Switch>
			</>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
