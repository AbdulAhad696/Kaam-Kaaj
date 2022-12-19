import { Component, OnInit,Input } from '@angular/core';
import { RatingComponent } from '../../Shared/rating/rating.component';
import { GetServicesService } from '../../Services/get-services/get-services.service';
import { lastValueFrom } from 'rxjs';
import { SpinnerService } from '../../Services/spinner/spinner.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent  implements OnInit  {
  @Input() rating:RatingComponent
constructor(private getServices:GetServicesService,private SpinnerService:SpinnerService,private router:Router)  {
    
  }

  services:any=[]
  async getAllServices(){
    this.SpinnerService.requestStarted()
    this.services=await lastValueFrom(this.getServices.fetchingServices())
    setTimeout(() => {
      this.SpinnerService.requestEnded()
    }, 2000)
  }
  showServiceProviders(service:any){

    this.router.navigate([`customer-mainpage/serviceproviders/${service}`])
    
    // this.router.navigateByUrl('/serviceproviders', { state: { service:service} });
  } 
  ngOnInit(): void {
    this.getAllServices()
  }

}
