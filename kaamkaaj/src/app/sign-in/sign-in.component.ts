import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userInput="";
  passInput="";
  private username="";
  private password="";
  constructor() { }
  onLogin(){
    this.username=this.userInput;
    this.password=this.passInput;
    this.userInput="";
    this.passInput="";
    console.log(this.username,this.password);
    //send request to express API here
  }
  ngOnInit(): void {
  }

}
