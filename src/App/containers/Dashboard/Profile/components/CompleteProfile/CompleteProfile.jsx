import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
export const CompleteProfile = ({ error }) => {
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="body1">
          Платёжные данные обновлены. Теперь вы можете заказывать такси.
        </Typography>
      </Grid>
      <Grid item xs={12} align="left">
        <label style={{ color: "red" }}>{error}</label>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="primary" variant="contained" component={Link} to="/map">
          Перейти на карту
        </Button>
      </Grid>
    </Grid>
  );
};