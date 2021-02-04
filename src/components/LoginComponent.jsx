import React,{Component} from "react";
import UserAPI from "../api/UserAPI.js";
import AuthenticationService from './AuthenticationService.js'
class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            email : '',
            password : '',
            loginSuccess:true
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    
    handleChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked(){
        var responseData='';
        UserAPI.loginMethod(this.state)
        .then(
            Response=>{
                responseData=Response.data.status;
            if(responseData==="SUCCESS"){
                this.setState({loginSuccess:true})
                AuthenticationService.registerSuccessfulLogin(this.state.email)
                this.props.history.push(`/welcome/${this.state.email}`)
            }else{
                this.setState({
                    loginSuccess:false
                })
            }
        }
        )       
    }


    render(){
        return(
            <div className="LoginComponent">
                <h1>Login</h1>
                <div className="container">
                {this.state.loginSuccess ? null :<div className="alert alert-warning">Invalid Credentials</div>}
                email : <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>LogIn</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent