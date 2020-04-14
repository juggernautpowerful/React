import React from "react";
import "./App.css";
import { Login } from "./components/Login";
import { SignIn } from "./components/SignIn";
import { MapPage } from "./components/Map";
import { Profile } from "./components/Profile";
import { Header } from "./components/Header";
import { AuthContext } from "./components/Context";
import { Grid, Paper } from "@material-ui/core";
import Background from "./Images/login-background.jpg";
import { Logo } from "loft-taxi-mui-theme";

const menu = [
  {
    path: "map",
    name: "Карта",
  },
  {
    path: "profile",
    name: "Профиль",
  },
  {
    path: "signout",
    name: "Выйти",
  },
];

function App() {
  const [currentPath, setCurrentPath] = React.useState("login");
  const { authorized, logout } = React.useContext(AuthContext);
  const changePath = (path) => {
    setCurrentPath(path);
    if (path === "signout") {
      setCurrentPath("login");
      logout();
    }
  };

  const renderAuthContent = () => {
    switch (currentPath) {
      case "map":
        return <MapPage />;
      case "profile":
        return <Profile />;

      default:
        return null;
    }
  };
  const renderUnauthContent = () => {
    switch (currentPath) {
      case "signin":
        return <SignIn changePath={changePath} />;
      default:
        return <Login changePath={changePath} />;
    }
  };

  return (
    <>
      {authorized && <Header changePath={changePath} items={menu}></Header>}
      {authorized ? (
        renderAuthContent()
      ) : (
        <Paper
          elevation={1}
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${Background})`,
          }}
        >
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={3}>
              <Logo animated />
            </Grid>
            <Grid item xs={3}>
              <Paper
                elevation={1}
                style={{
                  padding: "44px 60px",
                  minWidth: "500px",
                  marginTop: "48px",
                  marginBottom: "48px",
                }}
              >
                {renderUnauthContent()}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
}

export default App;
