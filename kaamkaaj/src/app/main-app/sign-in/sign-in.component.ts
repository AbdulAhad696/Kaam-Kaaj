import { Component, OnInit } from '@angular/core';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { SpinnerService } from './../../Services/spinner/spinner.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [SignInService]
})
export class SignInComponent implements OnInit {
  userInput = "";
  passInput = "";
  private username = "";
  private password = "";
  loggedInUser: any = []
  constructor(private signinService: SignInService , private router:Router,private SpinnerService:SpinnerService) { }

  async onLogin() {
    this.username = this.userInput;
    this.password = this.passInput;
    var credentials = {
      email: this.username,
      password: this.password
    }
    this.SpinnerService.requestStarted()
    this.loggedInUser = await lastValueFrom(this.signinService.findUserLogin(credentials))
    this.SpinnerService.requestEnded()
    if (this.loggedInUser.length > 0) {
      this.signinService.storeinlocalstorage(this.loggedInUser[0]);
      if(this.loggedInUser[0].role == "Client"){
        this.router.navigate(['/customer-mainpage'])
      }
      
    }
  }
  logout(){
    this.signinService.clearsession();
  }
  ngOnInit(): void {
  }

}
