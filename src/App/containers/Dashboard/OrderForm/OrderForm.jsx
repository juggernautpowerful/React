import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
	actions,
	IsAddressesSelector,
	AddressListSelector,
} from "../../../store/AddressList";
import { actions as routeActions } from "../../../store/Route";

import Select from "react-select";
import { Button, Grid, Typography, Paper } from "@material-ui/core";

const addressesfake = [
	"Пулково (LED)",
	"Шаверма на Невском",
	"Инфекционная больница им. Боткина",
	"Волковское кладбище",
];
const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];
const OrderForm = (props) => {
	const { fetchAddressList, isAddresses } = props;

	if(!props.isAddresses){
		fetchAddressList();
		console.log(">>>>>> is addresses", props.isAddresses);
	}

	console.log("<<<<< is addresses", props.addresses);
	console.log("!!!!! is addresses", props.isAddresses);

	useEffect(() => {
		
		console.log("props ", props);
		
			//fetchAddressList();
		
	}, [false]);

	const handleChange = () => {};

	const handleSubmit = (e) => {
		e.preventDefault();
		//console.log("props ", props);
		//props.getRoute();
	};

	return (
		<Paper
			elevation={1}
			style={{
				padding: "44px 60px",
				marginTop: "48px",
				marginBottom: "48px",
				left: "20px",
				maxWidth: "30%",
				position: "absolute",
			}}
		>
			<form onSubmit={handleSubmit}>
				<Grid container>
					<Grid item xs={12} style={{ marginBottom: "40px" }}>
						<Typography variant="h4" component="h1" align="left">
							Вызов такси
						</Typography>
					</Grid>
					<Grid item xs={12} style={{ marginBottom: "40px" }}>
						<Select
							name="from"
							options={options}
							placeholder="Выберите адрес отправления"
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12} style={{ marginBottom: "40px" }}>
						<Select
							name="to"
							options={options}
							placeholder="Выберите адрес прибытия"
							onChange={handleChange}
						/>
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
	addresses: AddressListSelector(state),
	isAddresses: IsAddressesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchAddressList: () => dispatch(actions.fetchAddressList()),
	getRoute: (value) => dispatch(routeActions.getRoute(value)),
});

const connectedOrderForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderForm);
export { connectedOrderForm as OrderForm };
