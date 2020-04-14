import React from "react";
import {
  Button,
  Input,
  FormLabel,
  Grid,
  Typography,
} from "@material-ui/core";

export class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };

  handlerLogin = () => {
    const { changePath } = this.props;
    changePath("login");
  };

  handlerSubmit = (e) => {
    e.preventDefault();

    const { email, password, firstname, lastname } = this.state;
    const { changePath } = this.props;

    if (email && password && firstname && lastname) {
      changePath("profile");
    }
  };

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, firstname, lastname } = this.state;

    return (
      <>
        <form onSubmit={this.handlerSubmit} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                align="left"
                variant="h4"
                component="h1"
                style={{ marginBottom: "30px" }}
              >
                Регистрация
              </Typography>
              <Typography align="left" variant="body1" component="p">
                Уже зарегистрированы?{" "}
                <FormLabel color="secondary" onClick={this.handlerLogin}>
                  Войти
                </FormLabel>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Input
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handlerChange}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                type="text"
                name="firstname"
                placeholder="имя"
                value={firstname}
                onChange={this.handlerChange}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                type="text"
                name="lastname"
                placeholder="фамилия"
                value={lastname}
                onChange={this.handlerChange}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="text"
                name="password"
                placeholder="пароль"
                value={password}
                onChange={this.handlerChange}
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
          </Grid>
        </form>
      </>
    );
  }
}
