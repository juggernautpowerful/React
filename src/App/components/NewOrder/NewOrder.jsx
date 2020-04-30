import React from "react";
import { Button, Typography, Paper, Grid } from "@material-ui/core";
import  commonStyles from "../../Common.module.css";

export const NewOrder = (props) => {
	const handleClick = () => {
		props.flushRoute();
	};

	return (
		<Paper elevation={1} className={commonStyles.wrapFakePaper}>
			<Grid container>
				<Grid item xs={12}>
					<Typography component="h1" variant="h4" align="left">
						Заказ размещён
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body2" gutterBottom>
						Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleClick}
					>
						Сделать новый заказ
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};
