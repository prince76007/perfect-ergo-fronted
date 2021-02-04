import axios from "axios"

class EmployeeAPI{

    getAllEmployee(){
      return axios.get("http://localhost:8080/employee/list")
    }

    addNewEmployee(data){
      console.log(data)
        return axios.post("http://localhost:8080/employee/add",data)
    }
}

export default new EmployeeAPI()