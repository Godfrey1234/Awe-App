export class AuthService{

  loggedIn : boolean = false

  login(){

    this.loggedIn = true
  }

  // logout(){
  //   this.loggedIn = false
  // }

  IsAuthenticated(){

    if(localStorage.getItem('token') != null)
    {
      return true;
    }
    else{
      return false;

    }
   //return this.loggedIn ;
  }
}