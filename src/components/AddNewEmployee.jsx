import React,{Component} from 'react'
import EmployeeAPI from '../api/EmployeeAPI'
import Helloworld from '../api/HelloWorld'

class AddNewEmployee extends Component{

    constructor(props){
        super(props)
        this.state={
            name : '',
            email : '',
            phone: '',
            address: '',
            photo: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.addClicked = this.addClicked.bind(this)
    }
 
    handleChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    onFileChangeHanlder=(e)=>{
        this.setState({
            photo:e.target.files[0]
        });

    }

    addClicked(){
        const formData = new FormData();
        console.log(this.state.photo);
        formData.append('name',this.state.name);
        formData.append('email',this.state.email);
        formData.append('address',this.state.address);
        formData.append('phone',this.state.phone);
        formData.append('photo',this.state.photo);
       EmployeeAPI.addNewEmployee(formData)
       .then(Response=>{
           if(Response.data.status==="SUCCESS"){
               this.props.history.push("/employees");
           alert("Employee Added Succesfully");
        }
       })
    }

    render(){
        return(
            <div className="AddNewEmployee">
                <h3>Add New Employee</h3>
                <div className="container form-group">
                    <table className="table">
                        <tbody>
                        <tr><td>Name : </td>
                        <td><input type="name" name="name" value={this.state.name} onChange={this.handleChange} /></td></tr>
                <tr><td>Email : </td>
                <td><input type="email" name="email" value={this.state.email} onChange={this.handleChange}/></td></tr>
                <tr><td>Phone : </td>
                <td><input type="phone" name="phone" value={this.state.phone} onChange={this.handleChange} /></td></tr>
                <tr><td>Address : </td>
                <td><input type="address" name="address" value={this.state.address} onChange={this.handleChange}/></td></tr>
                <tr><td> Photo : </td><td><input accept="image/*" className="form-control" type="file" name="photo" onChange={this.onFileChangeHanlder}/></td></tr>
                <tr><td></td><td><button className="btn btn-success float-right" onClick={this.addClicked}> Add new </button></td></tr>
                </tbody>             
                </table>
                </div>
            </div>
        )
    }
}

export default AddNewEmployee