import React from "react";
import { Button, Typography, Paper, Grid } from "@material-ui/core";

export const NewOrder = (props) => {
	const handleClick = () => {
		props.flushRoute();
	};

	return (
		<Paper
			elevation={1}
			style={{
				padding: "44px 60px",
				marginTop: "48px",
				marginBottom: "48px",
				left: "20px",
				width: "25%",
				position: "absolute",
			}}
		>
			<Grid container>
				<Grid item xs={12} style={{ marginBottom: "40px" }}>
					<Typography component="h1" variant="h4" align="left">
						Заказ размещён
					</Typography>
				</Grid>
				<Grid item xs={12} style={{ marginBottom: "40px" }}>
					<Typography variant="body2" gutterBottom>
						Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
					</Typography>
				</Grid>
				<Grid item xs={12} style={{ marginBottom: "10px", marginTop: "80px" }}>
					<Button fullWidth variant="contained" color="primary" onClick={handleClick}>
						Сделать новый заказ
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};
