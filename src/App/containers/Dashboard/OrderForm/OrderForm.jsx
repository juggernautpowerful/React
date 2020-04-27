import React, { useEffect } from "react";
import { connect } from "react-redux";

import { AddressListSelector } from "../../../store/AddressList";
import { actions as routeActions } from "../../../store/Route";

import Select from "react-select";
import { Button, Grid, Typography, Paper } from "@material-ui/core";



const removeFromArray = (name, array) => {
	return array.filter((el) => {
		if (el.value !== name) return el;
	});
};

const OrderForm = (props) => {
	useEffect(() => {
		console.log("useEffect props.addresses ", props.addresses);
		const list = props.addresses
			? props.addresses.map((item) => ({
					value: item,
					label: item,
			  }))
			: [];

		if (list.length > 0 && fromList.length === 0) {
			setFromList(list);
		}
		if (list.length > 0 && toList.length === 0) {
			setToList(list);
		}
	});
	console.log("OrderForm props ", props);
	
	const [fromSelected, setFrom] = React.useState("");
	const [toSelected, setTo] = React.useState("");
	const [toList, setFromList] = React.useState(
		props.addresses ? props.addresses : ""
	);
	const [fromList, setToList] = React.useState(
		props.addresses ? props.addresses : ""
	);
	console.log("toList ", toList);
	const handleChange = (event, props) => {
		const { label } = event;
		const { name } = props;
		switch (name) {
			case "from":
				setFrom(label);
				setFromList(removeFromArray(label, fromList));
				break;
			case "to":
				setTo(label);
				setToList(removeFromArray(label, toList));
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.getRoute([fromSelected, toSelected]);
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
							options={fromList}
							placeholder="Выберите адрес отправления"
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12} style={{ marginBottom: "40px" }}>
						<Select
							name="to"
							options={toList}
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
});

const mapDispatchToProps = (dispatch) => ({
	getRoute: (value) => dispatch(routeActions.getRoute(value)),
});

const connectedOrderForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderForm);
export { connectedOrderForm as OrderForm };
