import React from 'react'
import  './Login.css'

export class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        }
    };

    handlerSignIn = () => {
        const {changePath} = this.props;
        changePath("signin");
    };

    handlerSubmit = (e) => {
        e.preventDefault();

        const {email, password} = this.state;
        const {changePath} = this.props;
            
        if(email && password){
            changePath("map");
        }
    };

    handlerChange =  (e) => {
        this.setState({[e.target.name]:e.target.value});
    };

    render(){
        const {email, password} = this.state;
        return(
            <div className="Login">
            <div>
                <h1>Войти</h1>
                <p>Новый пользователь? <label 
                    onClick={this.handlerSignIn}
                    >Зарегистрироваться</label></p>
                <form onSubmit={this.handlerSubmit}>  
                    <input type="text" name="email" value={email} onChange={this.handlerChange} />
                    <input type="text" name="password" value={password} onChange={this.handlerChange}/>
                    <button>Войти</button>
                </form>
            </div>
            </div>
        );
    }
}