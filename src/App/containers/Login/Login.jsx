import React from "react";
import { connect } from "react-redux";
import { actions } from "../../store/Login";
import { Redirect } from "react-router-dom";
import { isAuthSelector } from "../../store/Login";

import {
	Button,
	Input,
	Grid,
	Typography,
	Paper,
	Link,
} from "@material-ui/core";
import Background from "../../../Images/login-background.jpg";
import { Logo } from "loft-taxi-mui-theme";

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
								<Grid container>
									<Grid item xs={12}>
										<Typography
											align="left"
											variant="h4"
											component="h1"
											style={{ marginBottom: "30px" }}
										>
											Войти
										</Typography>
										<Typography
											align="left"
											variant="body1"
											style={{ marginBottom: "10px" }}
										>
											Новый пользователь?{" "}
											<Typography component={Link} href="/signin">
												зарегистрироваться
											</Typography>
										</Typography>
									</Grid>
									<form onSubmit={this.handlerSubmit} style={{ width: "100%" }}>
										<Grid container>
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
											<Grid
												item
												xs={12}
												style={{ marginTop: "10px" }}
												align="right"
											>
												<Button
													variant="contained"
													color="primary"
													type="submit"
												>
													Войти
												</Button>
											</Grid>
										</Grid>
									</form>
								</Grid>
							</Paper>
						</Grid>
					</Grid>
				</Paper>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
