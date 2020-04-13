import React from "react";
import "./App.css";
import { Login } from "./components/Login";
import { SignIn } from "./components/SignIn";
import { MapPage } from "./components/Map";
import { Profile } from "./components/Profile";
import { Header } from "./components/Header";
import { AuthContext } from "./components/Context";
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

function App () {
  const [currentPath, setCurrentPath] = React.useState("login");
  const {authorized, logout} =  React.useContext(AuthContext);
  const changePath = (path) => {
    
    setCurrentPath(path);
    if (path === "signout"){
       setCurrentPath("login");
       logout();
    }
  };

  const renderContent = () => {
    if (authorized) {
      console.log("authorized", currentPath);
      switch (currentPath) {
        case "map":
          return <MapPage />;
        case "profile":
          return <Profile />;
        
        default:
          return null;
      }
    } else {     
      switch (currentPath) {
        case "signin":
          return <SignIn changePath={changePath} />;
        default:
          return <Login changePath={changePath} />;
      }
    }
  };

      return (
        <>
          <Logo animated />
          {authorized && (<Header changePath={changePath} items={menu}></Header>)}
          {renderContent()}
        </>
      );
}

export default App;
