import React from "react";
import { connect } from "react-redux";
import { actions } from "../../store/duck";
import { Redirect, Link } from "react-router-dom";
import { isAuthSelector } from "../../store/selectors";
import { Button, Input, FormLabel, Grid, Typography } from "@material-ui/core";

const mapStateToProps = (state) => ({
	isAuth: isAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	logIn: (value) => dispatch(actions.logIn(value)),
});

export class Login extends React.Component {
	state = {
		email: "test@test.com",
		password: "123123",
	};

	handlerSubmit = (e) => {
		e.preventDefault();
		const { logIn } = this.props;
		logIn(this.state);
	};

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		const { email, password } = this.state;
		const { isAuth } = this.props;

		if (isAuth) {
			return <Redirect path="/login" to="/dashboard/map" />;
		} else {
			return (
				<div>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography
								align="left"
								variant="h4"
								component="h1"
								style={{ marginBottom: "30px" }}
							>
								Войти
							</Typography>
							<Typography align="left" variant="body1" component="p">
								Новый пользователь?{" "}
								<FormLabel color="secondary">
									<Link to="/signin">Зарегистрироваться</Link>
								</FormLabel>
							</Typography>
						</Grid>
						<form onSubmit={this.handlerSubmit} style={{ width: "100%" }}>
							<Grid item xs={12} style={{ marginBottom: "30px" }}>
								<Input
									type="text"
									placeholder="email"
									name="email"
									value={email}
									onChange={this.handlerChange}
									style={{ width: "100%" }}
								/>
							</Grid>
							<Grid item xs={12} style={{ marginBottom: "30px" }}>
								<Input
									type="text"
									placeholder="пароль"
									name="password"
									value={password}
									onChange={this.handlerChange}
									style={{ width: "100%" }}
								/>
							</Grid>
							<Grid item xs={12} style={{ marginTop: "10px" }}>
								<Button
									variant="contained"
									ailgn="right"
									color="primary"
									type="submit"
								>
									Войти
								</Button>
							</Grid>
						</form>
					</Grid>
				</div>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
