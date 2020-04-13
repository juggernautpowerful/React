import React from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

export class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            firstname:"",
            lastname:""
        }
    };

    handlerLogin = () => {
        const {changePath} = this.props;
        changePath("login");
    };

    handlerSubmit = (e) => {
        e.preventDefault();

        const {email, password, firstname, lastname} = this.state;
        const {changePath} = this.props;

        if(email && password && firstname && lastname){
            changePath("profile");
        }
    };

    handlerChange =  (e) => {
        this.setState({[e.target.name]:e.target.value});
    };

    render(){
        const {email, password, firstname, lastname} = this.state;
        return(
            <>
                <h1>Войти</h1>
                <p>Уже зарегестрированы? <label 
                    onClick={this.handlerLogin}
                    >Войти</label></p>
                <form onSubmit={this.handlerSubmit}>  
                    <Input type="text" name="email" value={email} onChange={this.handlerChange} />
                    <Input type="text" name="firstname" value={firstname} onChange={this.handlerChange} />
                    <Input type="text" name="lastname" value={lastname} onChange={this.handlerChange}/>
                    <Input type="text" name="password" value={password} onChange={this.handlerChange}/>
                    <Button color="primary" type="submit">Войти</Button>
                </form>
            </>
        );
    }
}