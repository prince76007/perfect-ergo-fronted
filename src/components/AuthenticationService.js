class AuthenticationService{

    registerSuccessfulLogin(email){
        sessionStorage.setItem('authenticatedUser',email);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLogin(){
        let user= sessionStorage.getItem('authenticatedUser');
        if(user===null) return false;
        return true;
    }
}

export default new AuthenticationService()