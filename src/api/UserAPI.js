import axios from "axios";

class UserAPI{

    loginMethod(data){
        return axios.post("http://localhost:8080/user/login",data);
    }
}

export default new UserAPI();