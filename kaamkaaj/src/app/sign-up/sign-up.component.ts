import { Component, OnInit } from '@angular/core';
import { SignUpService } from './../Services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private signUpService:SignUpService) { }
  
  isRegister:any;
  userData:any;

  userName="";
  email="";
  password="";
  phone="";
  cnic="";
  address="";
  allUsers:any


   validateUser(user:any){
    
    
    for(let eachUser of this.allUsers){
      if(user.email==eachUser.email){
        return false
      }
    }

    return true
  }

  async addUser(user:any){
    if( this.validateUser(user)){
      this.isRegister=this.signUpService.registerUserApi(user)
      if(this.isRegister){
        return "User is registered successfully!!"
      }
      else{
        return "Service is down currently. You may try later.."
      }
    }
    else{
      return "User with this email is already registered";
    }

  }

  handleClientSubmit(){
    this.userData={
      userName:this.userName,
      email:this.email,
      password:this.password,
      phone:this.phone,
      cnic:this.cnic,
      address:this.address,
      role:"Client"
    }
    alert(this.signUpService.registerUserApi(this.userData))
    window.location.reload()
  }
    async handleWorkerSubmit(){
      this.userData={
        userName:this.userName,
        email:this.email,
        password:this.password,
        phone:this.phone,
        cnic:this.cnic,
        address:this.address,
        role:"Worker"
      }
      alert(await this.addUser(this.userData))
      window.location.reload()
  }
  ngOnInit(): void {
    this.signUpService.getUsersApi().subscribe(data=>{
      this.allUsers=data
    })
  }


}
