import React from 'react'

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
            <div>
                <h1>Войти</h1>
                <p>Уже зарегестрированы? <label 
                    onClick={this.handlerLogin}
                    >Войти</label></p>
                <form onSubmit={this.handlerSubmit}>  
                    <input type="text" name="email" value={email} onChange={this.handlerChange} />
                    <input type="text" name="firstname" value={firstname} onChange={this.handlerChange} />
                    <input type="text" name="lastname" value={lastname} onChange={this.handlerChange}/>
                    <input type="text" name="password" value={password} onChange={this.handlerChange}/>
                    <button>Войти</button>
                </form>
            </div>
        );
    }
}