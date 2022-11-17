import { Component,OnDestroy } from '@angular/core';
import { SignInService } from './Services/sign-in/sign-in.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'kaamkaaj';
  constructor(private signinservice:SignInService){
    window.onbeforeunload = ()=>{
      localStorage.clear();
    }
  }

}
