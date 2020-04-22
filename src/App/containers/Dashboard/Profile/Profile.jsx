import React from "react";
import { connect } from "react-redux";
import { actions } from "../../../store/duck";
import { isCardSelector } from "../../../store/selectors";
import {  Link } from "react-router-dom";
import { Button, Input, Typography } from "@material-ui/core";

const mapStateToProps = (state) => ({
	isCard: isCardSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	cardSave: (value) => dispatch(actions.cardSave(value)),
});

class Profile extends React.Component {
	state = {
		cardNumber: "",
		cardName: "",
		expiryDate: "",
		cvc: "",
	};

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handlerSubmit = (e) => {
		e.preventDefault();
		const { cardSave } = this.props;
		cardSave(this.state);
	};

	render() {
		const { cardNumber, cardName, expiryDate, cvc } = this.state;
		const { isCard } = this.props;
		if (isCard) {
			return (
				<>
					<Typography
						align="left"
						variant="h4"
						component="h1"
						style={{ marginBottom: "30px" }}
					>
						Профиль
					</Typography>

					<Typography align="left" variant="body1" component="p">
						Новый пользователь?{" "}
						<Button color="secondary">
							<Link to="#">Заказать такси</Link>
						</Button>
					</Typography>
				</>
			);
		} else {
			return (
				<>
					<Typography
						align="left"
						variant="h4"
						component="h1"
						style={{ marginBottom: "30px" }}
					>
						Профиль
					</Typography>
					<p>Способ оплаты</p>
					<form onSubmit={this.handlerSubmit}>
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
						<Input
							type="text"
							name="cvc"
                            placeholder="cvc"
                            maxLength="3"
							value={cvc}
							onChange={this.handlerChange}
						/>
							<Button
									variant="contained"
									ailgn="right"
									color="primary"
									type="submit"
								>
                            Сохранить
                            </Button>
					</form>
				</>
			);
		}
	}
}

const connectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);
export { connectedProfile as Profile };
