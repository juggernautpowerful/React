import React from "react";
import { connect } from "react-redux";

import { AddressListSelector } from "../../../store/AddressList";
import { actions as routeActions } from "../../../store/Route";

import {
	Button,
	Grid,
	Typography,
	Paper,
	TextField,
	MenuItem,
} from "@material-ui/core";
import styles from "./OrderForm.module.css";
//import commonStyles from "../../../Common.module.css";

const OrderForm = (props) => {
	const [itemSelectedFrom, setItemSelectedFrom] = React.useState("");
	const [itemSelectedTo, setItemSelectedTo] = React.useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "from":
				setItemSelectedFrom(value);
				break;
			case "to":
				setItemSelectedTo(value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.getRoute([itemSelectedFrom, itemSelectedTo]);
	};

	return (
		<Paper elevation={1} className={styles.wrapPaper}>
			<form onSubmit={handleSubmit}>
				<Grid container>
					<Grid item xs={12}>
						<Typography variant="h4" component="h1" align="left">
							Вызов такси
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField
							name="from"
							select
							margin="normal"
							placeholder="откуда"
							value={itemSelectedFrom}
							onChange={handleChange}
							fullWidth
						>
							{props.addresses.map((address) =>
								itemSelectedTo === address ? (
									address
								) : (
									<MenuItem key={address} value={address}>
										{address}
									</MenuItem>
								)
							)}
						</TextField>
					</Grid>
					<Grid item xs={12} className="Tset">
						<div className={styles.boxList}>
							<TextField
								name="to"
								select
								margin="normal"
								placeholder="Standard"
								value={itemSelectedTo}
								onChange={handleChange}
								fullWidth
							>
								{props.addresses.map((address) =>
									itemSelectedFrom === address ? (
										address
									) : (
										<MenuItem key={address} value={address}>
											{address}
										</MenuItem>
									)
								)}
							</TextField>
						</div>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" color="primary" fullWidth type="submit">
							Вызывать такси
						</Button>
					</Grid>
				</Grid>
			</form>
		</Paper>
	);
};

const mapStateToProps = (state) => ({
	addresses: AddressListSelector(state) ? AddressListSelector(state) : [],
});

const mapDispatchToProps = (dispatch) => ({
	getRoute: (value) => dispatch(routeActions.getRoute(value)),
});

const connectedOrderForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderForm);
export { connectedOrderForm as OrderForm };
