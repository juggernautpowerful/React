import React from "react";
import { connect } from "react-redux";
import { actions } from "./store/duck";
import {
	isUpdatedCardSelector,
	cardDataSelector,
	isCardSelector,
} from "./store/selectors";
import { Link } from "react-router-dom";
import {
	Button,
	Input,
	Grid,
	Typography,
	Paper,
	Card,
	Box,
} from "@material-ui/core";
import Background from "../../../../Images/login-background.jpg";
import { MCIcon } from "loft-taxi-mui-theme";

const mapStateToProps = (state) => ({
	isUpdatedCard: isUpdatedCardSelector(state),
	cardData: cardDataSelector(state),
	isCard: isCardSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	cardSave: (value) => dispatch(actions.cardSave(value)),
	cardGet: () => dispatch(actions.cardGet()),
});

class Profile extends React.PureComponent {
	state = {
		cardNumber: "",
		cardName: "",
		expiryDate: "",
		cvc: "",
	};
	componentDidMount() {
		if (this.props.isCard) {
			//console.log("this.propsthis.props ", this.props);
			this.props.cardGet();
		}
	}
	componentDidUpdate(prevProp) {
		console.log("componentDidUpdate.props ", this.props);
		let isCompareProps =
			JSON.stringify(prevProp.cardData) === JSON.stringify(this.props.cardData);
		if (!isCompareProps) {
			this.setState({
				cardNumber: this.props.cardData.cardNumber,
				cardName: this.props.cardData.cardName,
				expiryDate: this.props.cardData.expiryDate,
				cvc: this.props.cardData.cvc,
			});
		}
	}

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handlerSubmit = (e) => {
		e.preventDefault();
		const { cardSave } = this.props;
		console.log("this.state ", this.state);
		cardSave(this.state);
	};

	render() {
		const { isUpdatedCard } = this.props;
		const { cardNumber, cardName, expiryDate, cvc } = this.state;
		console.log("this.props ", this.props);
		console.log("isUpdatedCard ", isUpdatedCard);
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
								<Paper
									elevation={1}
									style={{
										padding: "44px 60px",
										minWidth: "500px",
										marginTop: "48px",
										marginBottom: "48px",
									}}
								>
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
											<Typography
												align="center"
												variant="body1"
												style={{
													marginBottom: "30px",
												}}
											>
												Платёжные данные обновлены. Теперь вы можете заказывать
												такси.
											</Typography>
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
								<Paper
									elevation={1}
									style={{
										padding: "44px 60px",
										minWidth: "500px",
										marginTop: "48px",
										marginBottom: "48px",
									}}
								>
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
									<form onSubmit={this.handlerSubmit}>
										<Grid container alignContent="center">
											<Grid item xs={12}>
												<Grid
													container
													spacing={4}
													justify="center"
													style={{ flexGrow: "1", marginBottom: "1px" }}
												>
													<Grid item xs={6}>
														<Card
															elevation={3}
															style={{
																width: "300px",
																height: "189px",
																padding: "16px 32px",
																minWidth: "300px",
																position: "relative",
															}}
														>
															<Box
																style={{
																	display: "flex",
																	height: "100%",
																	flexDirection: "column",
																	justifyContent: "space-around",
																}}
															>
																<MCIcon
																	style={{
																		top: "8px",
																		right: "8px",
																		width: "32px",
																		position: "absolute",
																	}}
																/>
																<Input
																	type="text"
																	name="cardNumber"
																	maxLength="16"
																	placeholder="номер карты"
																	value={cardNumber}
																	onChange={this.handlerChange}
																/>
																<Input
																	type="text"
																	name="cvc"
																	placeholder="cvc"
																	maxLength="3"
																	value={cvc}
																	onChange={this.handlerChange}
																/>
															</Box>
														</Card>
													</Grid>
													<Grid item xs={6}>
														<Card
															elevation={3}
															style={{
																width: "300px",
																height: "189px",
																padding: "16px 32px",
																minWidth: "300px",
																position: "relative",
															}}
														>
															<Box
																style={{
																	display: "flex",
																	height: "100%",
																	flexDirection: "column",
																	justifyContent: "space-around",
																}}
															>
																<Input
																	type="text"
																	name="cardName"
																	placeholder="имя владельца"
																	value={cardName}
																	onChange={this.handlerChange}
																/>
																<Input
																	type="text"
																	name="expiryDate"
																	placeholder="04/20"
																	value={expiryDate}
																	onChange={this.handlerChange}
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