import { Component, OnInit } from '@angular/core';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { SpinnerService } from './../../Services/spinner/spinner.service';
import { ServiceProviderProfileService } from 'src/app/Services/serviceProviderProfile/service-provider-profile.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [SignInService]
})
export class SignInComponent implements OnInit {
  message = "Failed to sign in. Username or password is incorrect"
  success: any;
  userInput = "";
  passInput = "";
  private username = "";
  private password = "";
  loggedInUser: any = []
  category: any = []
  showPassword: boolean = false
  constructor(private signinService: SignInService, private router: Router, private SpinnerService: SpinnerService,private spProfileService:ServiceProviderProfileService) { }

  async onLogin() {
    this.username = this.userInput;
    this.password = this.passInput;
    var credentials = {
      email: this.username,
      password: this.password
    }
    this.SpinnerService.requestStarted()

    this.loggedInUser = await lastValueFrom(this.signinService.findUserLogin(credentials))
    console.log(this.loggedInUser)
    setTimeout(() => {
      this.SpinnerService.requestEnded()
    }, 1000)
    if (this.loggedInUser.length > 0) {
      this.signinService.storeinlocalstorage(this.loggedInUser[0]);
      if (this.loggedInUser[0].role == "Client") {
        this.router.navigate(['/customer-mainpage'])
      }
      else if (this.loggedInUser[0].role == "Worker") {
        this.category = await lastValueFrom(this.spProfileService.fetchingServiceProviderProfile(this.username))
        this.signinService.setCategory(this.category[0]?.serviceDetails[0]?.tittle)
        this.router.navigate(['/service-provider'])
      }
      else if (this.loggedInUser[0].role == "Admin") {
        this.router.navigate(['/admin'])
      }

    }
    else {
      this.success = true

      setTimeout(() => {
        if (this.success == true) {
          this.success = null;
        }
        this.success = null;
      }, 5000);

    }
  }
  logout() {
    this.signinService.clearsession();
  }
  openModal() {

    $('#exampleModalCenter').modal('toggle')
  }
  ngOnInit(): void {
  }

}
