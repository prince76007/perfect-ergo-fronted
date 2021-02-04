import React,{Component} from 'react';
import './PerfectEgroStyle.css';
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import { withRouter } from 'react-router';

class HeaderComponent extends Component{
    render(){
        const isUserLogin= AuthenticationService.isUserLogin();
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a  className="navbar-brand" href='http://localhost:4200/welcome/Prince'>Perfect-Ergo-App</a></div>
                    
                        {isUserLogin?<ul className="navbar-nav"> <li><Link  className="nav-link" to="/welcome/Prince">Home</Link></li>
                        <li><Link  className="nav-link" to="/employees">Employees</Link></li></ul>: null}
                    
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {isUserLogin? null : <li><Link className="nav-link" to="/login">LogIn</Link></li>}
                        {isUserLogin? <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>LogOut</Link></li>: null}
                    </ul>
                </nav>
            </header>            
        )
    }
}

export default withRouter(HeaderComponent);