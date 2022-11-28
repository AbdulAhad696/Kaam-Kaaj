import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { GetServicesService } from '../../Services/get-services/get-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private GetServicesService:GetServicesService,private router:Router) { }
  allServices: any;


  async gettingServices(){
    this.allServices = await lastValueFrom(this.GetServicesService.fetchingServices());
    this.allServices.length = 4;
  }

  onServiceClick(service:any){
    this.router.navigate([`customer-mainpage/serviceproviders/${service}`])
    
  }
  ngOnInit(): void {
    this.gettingServices();
  }

}
