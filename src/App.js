import React from "react";
import "./App.css";
import { Login } from "./components/Login";
import { SignIn } from "./components/SignIn";
import { Map } from "./components/Map";
import { Profile} from "./components/Profile";
import {Header} from "./components/Header";

const menu = [
  {
    path: 'login',
    name: 'Логин',
  },
  {
    path: 'map',
    name: 'Карта',
  },
  {
    path: 'profile',
    name: 'Профиль',
  },
  {
    path: 'signin',
    name: 'Регистрация',
  },
]

 class App extends React.Component {
  state = {
    currentPath: "login"
  };

  changePath = (path)=>{
    this.setState({currentPath: path}); 
  };

  renderContent = () => {
    const {currentPath} = this.state;
    switch (currentPath) {
      case 'map':
        return <Map />
      case 'profile':
        return <Profile />
      case 'signin':
         return <SignIn changePath={this.changePath} />
      default:
        return <Login changePath={this.changePath} />;
    }
  };

  render() {
    return (
      <div>
        <Header changePath={this.changePath} items={menu} ></Header>
        {this.renderContent()}
      </div>
    )}
}

export default App;