import React from 'react'
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { AuthContext } from '../Context/AuthContext';

export function Login(props) {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
    const context = React.useContext(AuthContext);
    
    const handlerSignIn = () => {
        const {changePath} = props;
        changePath("signin");
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        const {changePath} = props;
        context.login(email, password);
        changePath("map");
    };

    const handlerChange =  (e) => {
        e.target.name === "email"? setEmail(e.target.value): setPassword(e.target.value);
    };

    return(
        <>
            <div className="Login">
            <div>
                <h1>Войти</h1>
                <p>Новый пользователь? <label 
                    onClick={handlerSignIn}
                    >Зарегистрироваться</label></p>
                <form onSubmit={handlerSubmit}>  
                    <Input type="text" name="email" value={email} onChange={handlerChange} />
                    <Input type="text" name="password" value={password} onChange={handlerChange}/>
                    <Button
                         color="primary" 
                         type="submit"
                    >
                        Войти
                    </Button>
                </form>
            </div>
            </div>
        </>
    );
}

Login.propTypes = {
    password:PropTypes.string,
    email:PropTypes.string
  };