import React, {Component} from "react";
import axios from 'axios'

class Login extends Component {

    state = {
        form: {
            userName: 'abdo',
            password: '123456'
        }
    }

    loginHandler(event) {
        event.preventDefault();
        axios.post('http://localhost:3100/api/login', this.state.form)
            .then(respons=>{
                console.log(respons.data);
                localStorage.setItem('Token', respons.data);
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div id="login">
                <h3 className="text-center text-white pt-5">Login form</h3>
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" action="" method="post" style={{
                                    border: '1px solid gray',
                                    padding: '20px'
                                }}>
                                    <h3 className="text-center text-info">Login</h3>

                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Username:</label>
                                        <input type="text" name="username" id="username" className="form-control"/>
                                    </div>
                                    <br/>


                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">Password:</label>
                                        <input type="password" name="password" id="password" className="form-control"/>
                                    </div>
                                    <br/>

                                    <div className="form-group">
                                        <label htmlFor="remember-me" className="text-info"><span>Remember me</span>
                                            <span><input id="remember-me" name="remember-me"
                                                         type="checkbox"/></span></label>
                                        <br/>

                                        <button type="submit" onClick={(event)=>this.loginHandler(event)}
                                                className="btn btn-info btn-md" >submit </button>
                                    </div>
                                    <br/>


                                    <div id="register-link" className="text-right">
                                        <a href="#" className="text-info">Register here</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Login;

