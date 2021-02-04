import React,{Component} from 'react';
import EmployeeAPI from '../api/EmployeeAPI';

class ListEmployeeComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            employees:[

            ]
        }

        this.addNewEmployee = this.addNewEmployee.bind(this)
    }

    addNewEmployee(props){
        this.props.history.push("/employee/add")
    }

componentDidMount(){
    EmployeeAPI.getAllEmployee()
    .then(Response=>{
        if(Response.status===200){
            console.log(Response.data)
            this.setState({
                employees:Response.data
            })
        }
    }
    )
}

    render(){
        return(
            <div>
                <h1>Employee List</h1>
                <div className="container">
                    <div><button onClick={this.addNewEmployee} className="btn btn-success float-right">Add Employee</button></div>
                <table className="table">
                    <thead>
                        <tr>
                        <th>Sr. No.</th><th>Name</th><th>Email</th><th>Address</th><th>Phone</th><th>Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(
                            employee=>
                            <tr key={employee.id}>
                            <td>{employee.sno}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>{employee.phone}</td>
                            <td><img scr={'data:image/png;base64,'+employee.photo} alt={employee.name}/></td>
                        </tr>
                        )}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
export default ListEmployeeComponent