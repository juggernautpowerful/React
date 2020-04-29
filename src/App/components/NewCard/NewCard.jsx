import React from "react";
import { Button, Typography, Paper, Grid,  } from "@material-ui/core";
import { Link } from "react-router-dom";
export const NewCard = () => {
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
                        Заполните платежные данные
					</Typography>
				</Grid>
				<Grid item xs={12} style={{ marginBottom: "40px" }}>
					<Typography variant="body2" gutterBottom>
                        Укажите информацию о банковской карте, чтобы сделать заказ.
					</Typography>
				</Grid>
				<Grid item xs={12} style={{ marginBottom: "10px", marginTop: "80px" }}>
					<Button component={Link} to="/dashboard/profile" fullWidth variant="contained" color="primary" >
                        Перейти в профиль
					</Button>
				</Grid>
			</Grid>to
		</Paper>
	);
};