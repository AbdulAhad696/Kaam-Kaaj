import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from './Services/sign-in/sign-in.service';
import { GetLocationService } from './Services/location/get-location.service';
import { globalcomponent } from './objects/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public initCount = 0;
  title = 'kaamkaaj';
  constructor(private signinservice: SignInService, private router: Router, private getLocationService: GetLocationService) {

  }
  amount = "1"

  onLoadPaymentData(event: Event) {
    const eventDetails = event as CustomEvent<google.payments.api.PaymentData>
    console.log('load payment data', eventDetails)
  }
  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (paymentData) => {
    console.log("payment authorized", paymentData)
    return { transactionState: "SUCCESS" }
  }
  onError = (event: ErrorEvent) => {
    console.log("ERROR", event.error)
  }
  ngOnInit() {
    this.initCount += 1;
    let usertype = this.signinservice.getusertype()
    if (usertype == "Client") {
      // this.router.navigate(['/customer-mainpage'])

    }
    else if (usertype == "Worker") {
      this.router.navigate(['/service-provider'])
    }
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
