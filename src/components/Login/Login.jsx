import React from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Context/AuthContext";
import { Button, Input, FormLabel, Grid, Typography } from "@material-ui/core";

export function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const context = React.useContext(AuthContext);

  const handlerSignIn = () => {
    const { changePath } = props;
    changePath("signin");
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const { changePath } = props;
    context.login(email, password);
    changePath("map");
  };

  const handlerChange = (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            align="left"
            variant="h4"
            component="h1"
            style={{ marginBottom: "30px" }}
          >
            Войти
          </Typography>
          <Typography align="left" variant="body1" component="p">
            Новый пользователь?{" "}
            <FormLabel color="secondary" onClick={handlerSignIn}>
              Зарегистрироваться
            </FormLabel>
          </Typography>
        </Grid>
        <form onSubmit={handlerSubmit} style={{ width: "100%" }}>
          <Grid item xs={12} style={{ marginBottom: "30px" }}>
            <Input
              type="text"
              placeholder="email"
              name="email"
              value={email}
              onChange={handlerChange}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} style={{ marginBottom: "30px" }}>
            <Input
              type="text"
              placeholder="пароль"
              name="password"
              value={password}
              onChange={handlerChange}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            <Button
              variant="contained"
              ailgn="right"
              color="primary"
              type="submit"
            >
              Войти
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
}

Login.propTypes = {
  changePath: PropTypes.func.isRequired,
};
