import React from "react";
import { connect } from "react-redux";
import { actions } from "../../store/Login";
import { Redirect } from "react-router-dom";
import {
	isAuthSelector,
	isLoadingSelector,
	errorSelector,
} from "../../store/Login";
import { CircularIndeterminate as Loader } from "../../components/Loader";
import commonStyles from "../../Common.module.css";

import {
	Button,
	Grid,
	Typography,
	Paper,
	Link,
	Box
} from "@material-ui/core";
import {
	TextField
  } from 'mui-rff';
  import {
	Alert
} from "@material-ui/lab";
import Background from "../../../Images/login-background.jpg";
import { Logo } from "loft-taxi-mui-theme";
import { Form } from "react-final-form";

const mapStateToProps = (state) => ({
	isAuth: isAuthSelector(state),
	isLoading: isLoadingSelector(state),
	error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	logIn: (value) => dispatch(actions.logIn(value)),
});

const validate = (values) => {
	const errors = {};
	console.log("validate ", values);
	if (!values.email) {
		errors.email = "Необходимо заполнить поле";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = "Email не валидный";
	}
	return errors;
};
const formFields = [
	{
		size: 12,
		field: (
			<TextField
				type="email"
				label="Email"
				name="email"
				margin="none"
				//required={true}
				fullWidth
			/>
		),
	},
	{
		size: 12,
		field: (
			<TextField
				label="Пароль"
				name="password"
				margin="none"
				fullWidth
				//required={true}
			/>
		),
	},
];

export class Login extends React.Component {
	state = {
		email: "",
		password: "",
	};
	handleSubmit = (values) => {
		const { logIn } = this.props;
		console.log("values ", values);
		logIn({ email: values.email, password: values.password });
	};
	render() {
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
							<Paper className={commonStyles.wrapPaper} elevation={1}>
								<Grid container>
									<Grid item xs={12}>
										<Typography align="left" variant="h4" component="h1">
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
									<Grid container>
										<Form
											onSubmit={this.handleSubmit}
											validate={validate}
											initialValues={this.state}
											render={({ handleSubmit, values }) => (
												<form onSubmit={handleSubmit} style={{ width: "100%" }}>
													{formFields.map((item, idx) => (
														<Grid item xs={item.size} key={idx}>
															{item.field}
														</Grid>
													))}

													{this.props.error && (
														<Box mt={2}>
															{/* <Typography color="error" variant="body2">
																{this.props.error}
															</Typography> */}
															<Alert severity="error">{this.props.error}</Alert>
														</Box>
													)}
													{this.props.isLoading ? (
														<Grid item xs={12} align="center">
															<Loader />
														</Grid>
													) : (
														<Grid item xs={12} align="right">
															<Button
																variant="contained"
																color="primary"
																type="submit"
															>
																Войти
															</Button>
														</Grid>
													)}
												</form>
											)}
										/>
									</Grid>
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
