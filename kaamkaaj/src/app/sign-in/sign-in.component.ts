import { Component, OnInit } from '@angular/core';
import { SignInService } from '../Services/sign-in/sign-in.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';


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
  constructor(private signinService: SignInService , private router:Router) { }

  async onLogin() {
    this.username = this.userInput;
    this.password = this.passInput;
    var credentials = {
      email: this.username,
      password: this.password
    }
    this.loggedInUser = await lastValueFrom(this.signinService.findUserLogin(credentials))
    if (this.loggedInUser.length > 0) {
      if(this.loggedInUser[0].role == "Client"){
        alert("LOGGED IN" + (this.loggedInUser[0].role));
        this.router.navigate(['/customer-mainpage'])
      }
    }
  }
  ngOnInit(): void {
  }

}
