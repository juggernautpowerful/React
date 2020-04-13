import React  from 'react';

export const AuthContext = React.createContext({});

export class AuthProvider extends React.Component {
    state = {authorized: false};

    login = (email, password) => {
        if(email && password){
            this.setState({authorized: true, email, password});
        } else {
            this.setState({authorized: false, email, password});
        }
    };

    logout = () => {
        this.setState({authorized: false, email:"", password:""});
    };

    render(){
        const {children} = this.props;
        return(
            <AuthContext.Provider
                value = {{
                    authorized: this.state.authorized,
                    login: this.login,
                    logout: this.logout
                }}
            >
                {children}
            </AuthContext.Provider>
        )
    }
}