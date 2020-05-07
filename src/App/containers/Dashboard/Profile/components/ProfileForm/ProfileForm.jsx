import React from "react";
import { Button, Grid, Card, Box } from "@material-ui/core";
import { TextField } from "mui-rff";
import { Form } from "react-final-form";
import { MCIcon } from "loft-taxi-mui-theme";
import classes from "../../Profile.module.css";
const validate = (values) => {
  const errors = {};
  if (!values.cardNumber) {
    errors.cardNumber = "Необходимо заполнить поле";
  } else if (!/[\d| ]{16,19}$/i.test(values.cardNumber)) {
    errors.cardNumber = "Номер карты не валидный";
  }
  if (!values.cardName) {
    errors.cardName = "Необходимо заполнить поле";
  }
  if (!values.expiryDate) {
    errors.expiryDate = "Необходимо заполнить поле";
  }
  if (!values.cvc) {
    errors.cvc = "Необходимо заполнить поле";
  } else if (!/^[0-9]{3}$/i.test(values.cvc)) {
    errors.cvc = "cvc не валидный";
  }
  return errors;
};
export const ProfileForm = ({ cardData, cardSave }) => {
  const handlerSubmit = (values) => {
    cardSave({
      cardNumber: values.cardNumber,
      cardName: values.cardName,
      expiryDate: values.expiryDate,
      cvc: values.cvc,
    });
  };
  return (
    <Form
      onSubmit={handlerSubmit}
      validate={validate}
      initialValues={cardData}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container alignContent="center">
            <Grid item xs={12}>
              <Grid
                container
                spacing={4}
                justify="center"
                style={{ flexGrow: "1", marginBottom: "1px" }}
              >
                <Grid item xs={6}>
                  <Card elevation={3} className={classes.card}>
                    <Box className={classes.cardBox}>
                      <MCIcon className={classes.iconCard} />
                      <TextField
                        type="text"
                        name="cardNumber"
                        label="номер карты"
                        maxLength="16"
                        placeholder="номер карты"
                        autoComplete="off"
                      />
                      <TextField
                        type="text"
                        name="cvc"
                        label="cvc"
                        placeholder="cvc"
                        maxLength="3"
                        autoComplete="off"
                      />
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card elevation={3} className={classes.card}>
                    <Box className={classes.cardBox}>
                      <TextField
                        type="text"
                        name="cardName"
                        label="пользователь"
                        placeholder="имя владельца"
                      />
                      <TextField
                        type="text"
                        name="expiryDate"
                        label="дата окончания"
                        placeholder="04/20"
                        autoComplete="off"
                        pattern="\d\d/\d\d"
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
      )}
    />
  );
};