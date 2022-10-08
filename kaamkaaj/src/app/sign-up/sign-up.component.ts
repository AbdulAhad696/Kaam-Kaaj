import { Component, OnInit } from '@angular/core';
import { isEmpty, lastValueFrom } from 'rxjs';
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
  role=""
  allUsers:any


  async validateUser(user:any){
    // if(this.signUpService.getUsersApi({email:this.email})){
      
    //   return false
    // }
    // else{
    //   return true
    // }

    alert(await lastValueFrom(this.signUpService.getUsersApi({email:this.email})));




    
    
    // for(let eachUser of this.allUsers){
    //   if(user.email==eachUser.email){
    //     return false
    //   }
    // }

    // return true
  }

  async addUser(user:any){
    if(!(await lastValueFrom(this.signUpService.getUsersApi({email:this.email})))){
      // this.isRegister=this.signUpService.registerUserApi(user)
      if(await lastValueFrom(this.signUpService.registerUserApi(user))){
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
  
  clientClick(){
    this.role="Client"
  }
  workerClick(){
    this.role="Client"
  }
  async handleSubmit(){
    this.userData={
      userName:this.userName,
      email:this.email,
      password:this.password,
      phone:this.phone,
      cnic:this.cnic,
      address:this.address,
      role:this.role
    }
    alert(await this.addUser(this.userData))
    // window.location.reload()
  }
  ngOnInit(): void {
    // this.signUpService.getUsersApi({email:this.email}).subscribe(data=>{
    //   this.allUsers=data
    // })
  }


}
