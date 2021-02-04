import React,{Component} from 'react';
import './PerfectEgroStyle.css';
import {BrowserRouter as Router,Route, Switch,Link} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import AuthenticatedRoute from './AuthenticatedRoute';
import LogoutComponent from './LogoutComponent';
import LoginComponent from "./LoginComponent";
import ListEmployeeComponent from './ListEmployeeComponent';
import AddNewEmployee from './AddNewEmployee';
class PerfectErgoApp extends Component{
    render(){
        return(
     <div className="PerfectErgo">
         <Router>
             <HeaderComponent/>
             <Switch>
         <Route path="/" exact component={LoginComponent}/>
            <Route path="/login" component={LoginComponent}/>
            <AuthenticatedRoute path="/employees" component={ListEmployeeComponent}/>
            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
            <AuthenticatedRoute path="/employee/add" component={AddNewEmployee}/>
            <Route path="/logout" component={LogoutComponent}/>
            <Route component={ErrorComponent}/>
            </Switch>
            <FooterComponent/>
         </Router>
    </div>
        )
           
    }

}




class FooterComponent extends Component{
    render(){
        return(
            <footer className="footer"><span className="text-muted">Created By Prince Saxena &copy; All rights reserved 2021</span></footer>
        )
    }
}






class WelcomeComponent extends Component{
    render(){
        return(
        <div className="WelcomeComponent">
            <h1>Welcome!</h1>
            <div className="container">
            {this.props.match.params.name}. You can manage Employees List <Link to="/employees">here</Link>.
            </div>
        </div>
        )
    }
}

function ErrorComponent(){
    return(<div>Page Not Found</div>)
}

// function ShowInvalideCredentials(props){
// if(props.loginSuccess===false){
//     return <div>Invalid Credentials</div>
// }else{
//     return null
// }
// }


export default PerfectErgoApp;