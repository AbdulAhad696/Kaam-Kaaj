import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GetServicesService } from '../Services/get-services/get-services.service';

@Component({
  selector: 'app-customer-landing-page',
  templateUrl: './customer-landing-page.component.html',
  styleUrls: ['./customer-landing-page.component.css']
})
export class CustomerLandingPageComponent implements OnInit {

  constructor(private GetServicesService:GetServicesService) { }
  allServices: any;
  
  async gettingServices(){
    this.allServices = await lastValueFrom(this.GetServicesService.fetchingServices());
    // this.allServices = this.allServices.splice( );
    this.allServices.length = 4;
    console.log(this.allServices[3].tittle);
  }
  
  ngOnInit(): void {
    this.gettingServices();
  }

}
