import { Component, OnInit } from '@angular/core';
import { firstValueFrom, isEmpty, lastValueFrom } from 'rxjs';
import { SignUpService } from 'src/app/Services/sign-up/sign-up.service';
import { SpinnerService } from 'src/app/Services/spinner/spinner.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private signUpService:SignUpService,private SpinnerService:SpinnerService) { }
  
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
    alert(await lastValueFrom(this.signUpService.getUsersApi({email:this.email})));
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
    this.role="Worker"
  }
  async handleSubmit(){
    this.userData={
      userName:this.userName,
      email:this.email,
      password:this.password,
      cnic:this.cnic,
      phoneNumber:this.phone,
      address:this.address,
      role:this.role
    }
    
    this.SpinnerService.requestStarted()
    this.isRegister=await this.addUser(this.userData)
    this.SpinnerService.requestEnded()
    this.userName="";
    this.email="";
    this.password="";
    this.cnic="";
    this.phone="";
    this.address="";
    this.role="";
    setTimeout(()=>{
      alert(this.isRegister)

    },10)
    
    // window.location.reload()
  }
  ngOnInit(): void {
  }


}
