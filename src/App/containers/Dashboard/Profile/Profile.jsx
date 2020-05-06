import React from "react";
import { connect } from "react-redux";
import { actions } from "../../../store/Card";
import {
	isUpdatedCardSelector,
	cardDataSelector,
	errorSelector,
} from "../../../store/Card";
import { Link } from "react-router-dom";
import {
	Button,
	Grid,
	Typography,
	Paper,
	Card,
	Box,
} from "@material-ui/core";

import {
	TextField
  } from 'mui-rff';
  import { Form } from "react-final-form";
import Background from "../../../../Images/login-background.jpg";
import { MCIcon } from "loft-taxi-mui-theme";
import commonClasses from "../../../Common.module.css";
import classes from "./Profile.module.css";

const mapStateToProps = (state) => ({
	isUpdatedCard: isUpdatedCardSelector(state),
	cardData: cardDataSelector(state),
	error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	cardSave: (value) => dispatch(actions.cardSave(value)),
});

const validate = (values) => {
	const errors = {};
	if (!values.cardNumber) {
		errors.cardNumber = "Необходимо заполнить поле";
	} else if (!/^[0-9\s]{16,22}$/i.test(values.cardNumber)) {
		errors.cardNumber = "Номер карты не валидный";
	}
	if (!values.cardName) {
		errors.cardName = "Необходимо заполнить поле";
	} 
	if (!values.expiryDate) {
		errors.expiryDate = "Необходимо заполнить поле";
	} 
	if (!values.cvc) {
		errors.cvc = "Необходимо заполнить поле";
	} else if (!/^[0-9]{3}$/i.test(values.cvc)) {
		errors.cvc = "cvc не валидный";
	}
	return errors;
};



class Profile extends React.PureComponent {

	state = {
		cardNumber: "",
		cardName: "",
		expiryDate: "",
		cvc: "",
	};
	async componentDidMount(prevProp) {
		const {
			cardData: { cardNumber, cardName, expiryDate, cvc },
		} = this.props;

		this.setState({
			cardNumber,
			cardName,
			expiryDate,
			cvc,
		});
	}
	componentDidUpdate(prevProp) {
		const {
			cardData: { cardNumber, cardName, expiryDate, cvc },
		} = this.props;

		let isCompareProps =
			JSON.stringify(prevProp.cardData) === JSON.stringify(this.props.cardData);

		if (!isCompareProps) {
			this.setState({
				cardNumber,
				cardName,
				expiryDate,
				cvc,
			});
		}
	}

	handlerSubmit = (values) => {
		const { cardSave } = this.props;
		cardSave({ cardNumber: values.cardNumber, cardName: values.cardName, expiryDate: values.expiryDate, cvc: values.cvc  });
	};

	render() {
		const { isUpdatedCard } = this.props;
		if (isUpdatedCard) {
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
							direction="column"
							style={{ minHeight: "100vh" }}
						>
							<Grid item>
								<Paper elevation={1} className={commonClasses.wrapPaper}>
									<Typography align="center" variant="h4" component="h1">
										Профиль
									</Typography>
									<Typography
										align="center"
										variant="body1"
										gutterBottom
										style={{
											marginBottom: "40px",
											color: "rgba(0, 0, 0, 0.54)",
										}}
									>
										Способ оплаты
									</Typography>
									<Grid container alignItems="center" spacing={2}>
										<Grid item xs={12}>
											<Typography align="center" variant="body1">
												Платёжные данные обновлены. Теперь вы можете заказывать
												такси.
											</Typography>
										</Grid>
										<Grid item xs={12} align="left">
											<label style={{ color: "red" }}>{this.props.error}</label>
										</Grid>
										<Grid item xs={12} align="center">
											<Button
												color="primary"
												variant="contained"
												component={Link}
												to="/map"
											>
												Перейти на карту
											</Button>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
						</Grid>
					</Paper>
				</>
			);
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
							direction="column"
							style={{ minHeight: "100vh" }}
						>
							<Grid item>
								<Paper elevation={1} className={commonClasses.wrapPaper}>
									<Typography align="center" variant="h4" component="h1">
										Профиль
									</Typography>
									<Typography
										align="center"
										variant="body1"
										gutterBottom
										style={{
											marginBottom: "40px",
											color: "rgba(0, 0, 0, 0.54)",
										}}
									>
										Способ оплаты
									</Typography>
									<Form
											onSubmit={this.handlerSubmit}
											validate={validate}
											initialValues={this.state}
											render={({ handleSubmit, values }) => (
									<form onSubmit={handleSubmit}>
										<Grid container alignContent="center">
											<Grid item xs={12}>
												<Grid
													container
													spacing={4}
													justify="center"
													style={{ flexGrow: "1", marginBottom: "1px" }}
												>
													<Grid item xs={6}>
														<Card elevation={3} className={classes.card}>
															<Box className={classes.cardBox}>
																<MCIcon className={classes.iconCard} />
																<TextField
																	type="text"
																	name="cardNumber"
																	label="номер карты"
																	maxLength="16"
																	placeholder="номер карты"
																/>
																<TextField
																	type="text"
																	name="cvc"
																	label="cvc"
																	placeholder="cvc"
																	maxLength="3"
																/>
															</Box>
														</Card>
													</Grid>
													<Grid item xs={6}>
														<Card elevation={3} className={classes.card}>
															<Box className={classes.cardBox}>
																<TextField
																	type="text"
																	name="cardName"
																	label="пользователь"
																	placeholder="имя владельца"
																/>
																<TextField
																	type="text"
																	name="expiryDate"
																	label="дата окончания"
																	placeholder="04/20"
																/>
															</Box>
														</Card>
													</Grid>
												</Grid>
												<Grid align="center">
													<Button
														variant="contained"
														color="primary"
														type="submit"
														style={{ marginTop: "24px", marginLeft: "2px" }}
													>
														Сохранить
													</Button>
												</Grid>
											</Grid>
										</Grid>
									</form>
									)}
									/>
								</Paper>
							</Grid>
						</Grid>
					</Paper>
				</>
			);
		}
	}
}

const connectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);
export { connectedProfile as Profile };
