import { Component, OnInit,HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from './Services/sign-in/sign-in.service';
import { GetLocationService } from './Services/location/get-location.service';
import { globalcomponent } from './objects/global';
import { event } from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public initCount = 0;
  title = 'kaamkaaj';
  constructor(private signinservice: SignInService, private router: Router, private getLocationService: GetLocationService) {

  }
  amount = "1"
  

  ngOnInit() {
    this.initCount += 1;
    navigator.geolocation.getCurrentPosition((pos) => {
      this.getLocationService.getAddress(pos.coords.latitude, pos.coords.longitude).subscribe((res) => {
        // @ts-ignore
        if (res.results[6].long_name == "Pakistan") {
          globalcomponent.currency = "Rs."
        }
        else {
          globalcomponent.currency = "$"
        }
      })
    });
  }
}
