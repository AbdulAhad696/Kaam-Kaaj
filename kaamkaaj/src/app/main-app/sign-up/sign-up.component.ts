import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { SignUpService } from 'src/app/Services/sign-up/sign-up.service';
import { SpinnerService } from 'src/app/Services/spinner/spinner.service';
import { Router } from '@angular/router';
import { GetLocationService } from './../../Services/location/get-location.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private signUpService: SignUpService, private SpinnerService: SpinnerService, private router: Router, private getLocationService: GetLocationService) { }

  isRegister: any;
  userData: any;
  success: any;
  userName = "";
  email = "";
  password = "";
  phone = "";
  cnic = "";
  address = "";
  role = ""
  allUsers: any
  data: any
  location: any

  showPassword:boolean=false


  async validateUser(user: any) {
    alert(await lastValueFrom(this.signUpService.getUsersApi({ email: this.email })));
  }

  async addUser(user: any) {
    if (!(await lastValueFrom(this.signUpService.getUsersApi({ email: this.email })))) {
      // this.isRegister=this.signUpService.registerUserApi(user)
      if (await lastValueFrom(this.signUpService.registerUserApi(user))) {
        this.success = true
        return "Successfully registered! Please verify your account through email."
      }
      else {
        this.success = false
        return "Service is down currently. You may try later.."
      }
    }
    else {
      this.success = false
      return "User with this email is already registered";
    }


  }

  clientClick() {
    this.role = "Client"
  }
  workerClick() {
    this.role = "Worker"
  }
  async getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.getLocationService.getAddress(pos.coords.latitude, pos.coords.longitude).subscribe((res) => {
          // @ts-ignore
          this.address = res.results[0].formatted_address
          this.location = { latitude: pos.coords.latitude, longitude: pos.coords.longitude }
        })
      });
    }
  }
  async handleSubmit() {
    this.userData = {
      userName: this.userName,
      email: this.email,
      password: this.password,
      cnic: this.cnic,
      phoneNumber: this.phone,
      address: this.address,
      role: this.role,
      authentication: "false",
      location: this.location
    }

    this.SpinnerService.requestStarted()
    this.isRegister = await this.addUser(this.userData)
    this.SpinnerService.requestEnded()
    this.userName = "";
    this.email = "";
    this.password = "";
    this.cnic = "";
    this.phone = "";
    this.address = "";
    this.role = "";
    setTimeout(() => {
      if (this.success == true) {
        this.success = null;
        this.router.navigate(['/signin'])
      }
      this.success = null;


    }, 5000);
  }




  ngOnInit(): void {
  }


}
