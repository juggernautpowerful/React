import React from "react";
import { Button, Typography, Paper, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import commonStyles from "../../Common.module.css";

export const NewCard = () => {
	return (
		<Paper elevation={1} className={commonStyles.wrapFakePaper}>
			<Grid container>
				<Grid item xs={12}>
					<Typography component="h1" variant="h4" align="left">
						Заполните платежные данные
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body2" gutterBottom>
						Укажите информацию о банковской карте, чтобы сделать заказ.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Button
						component={Link}
						to="/dashboard/profile"
						fullWidth
						variant="contained"
						color="primary"
					>
						Перейти в профиль
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};
