import { Component, OnInit } from '@angular/core';
import { SignInService } from '../Services/sign-in/sign-in.service';

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
  constructor(private signinService: SignInService) { }
  onLogin() {
    this.username = this.userInput;
    this.password = this.passInput;
    this.userInput = "";
    this.passInput = "";
    var credentials = {
      cnicPhoneUsername: this.username,
      password: this.password
    }
    console.log(credentials);

    //send request to express API here
  }
  ngOnInit(): void {
  }

}
