import { Component, OnInit,OnDestroy } from '@angular/core';
import { SignInService } from './Services/sign-in/sign-in.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'kaamkaaj';
  constructor(private signinservice:SignInService){}
  ngOnInit() {
  }
  ngOnDestroy(){
    this.signinservice.clearsession();
  }
}
