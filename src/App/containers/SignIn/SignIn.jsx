import React from "react";
import { connect } from "react-redux";
import { actions } from "../../store/Register";
import { isAuthSelector } from "../../store/Login";
import { Redirect } from "react-router-dom";

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
import commonClasses from "../../Common.module.css";

const mapStateToProps = (state) => ({
	isAuth: isAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	SignIn: (value) => dispatch(actions.SignIn(value)),
});

class SignIn extends React.Component {
	state = {
		email: "",
		password: "",
		name: "",
		surname: "",
	};

	handlerSubmit = (e) => {
		e.preventDefault();
		const { SignIn } = this.props;
		SignIn(this.state);
	};

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { email, password, name, surname } = this.state;
		const { isAuth } = this.props;
		if (isAuth) {
			return <Redirect path="/signin" to="/dashboard/map" />;
		} else {
			return (
				<>
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
								<Paper elevation={1} className={commonClasses.wrapPaper}>
									<form onSubmit={this.handlerSubmit} style={{ width: "100%" }}>
										<Grid container spacing={2}>
											<Grid item xs={12}>
												<Typography
													align="left"
													variant="h4"
													component="h1"
												>
													Регистрация
												</Typography>
												<Typography align="left" variant="body1" component="p">
													Уже зарегистрированы?{" "}
													<Typography component={Link} href="/login">
														Войти
													</Typography>
												</Typography>
											</Grid>
											<Grid item xs={12} >
												<Input
													type="text"
													name="email"
													placeholder="email"
													value={email}
													onChange={this.handlerChange}
													style={{ width: "100%" }}
												/>
											</Grid>
											<Grid item xs={6}>
												<Input
													type="text"
													name="name"
													placeholder="имя"
													value={name}
													onChange={this.handlerChange}
													fullWidth
												/>
											</Grid>
											<Grid item xs={6} >
												<Input
													type="text"
													name="surname"
													placeholder="фамилия"
													value={surname}
													onChange={this.handlerChange}
													style={{ width: "100%" }}
												/>
											</Grid>
											<Grid item xs={12} >
												<Input
													type="text"
													name="password"
													placeholder="пароль"
													value={password}
													onChange={this.handlerChange}
													style={{ width: "100%" }}
												/>
											</Grid>
											<Grid
												item
												xs={12}
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
								</Paper>
							</Grid>
						</Grid>
					</Paper>
				</>
			);
		}
	}
}

const connectedSignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn);
export { connectedSignIn as SignIn };
