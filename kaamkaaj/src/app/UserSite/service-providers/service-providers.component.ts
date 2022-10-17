import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceProviderService } from '../../Services/serviceProvider/service-provider.service';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../../Services/spinner/spinner.service';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {
  
  service:any
  serviceProviders:any=[]
  constructor(private ServiceProviderService:ServiceProviderService,private ActivatedRoute:ActivatedRoute,private SpinnerService:SpinnerService) {

   }

  async getServiceProviders(service:any){
    this.SpinnerService.requestStarted()
    this.serviceProviders=await lastValueFrom( this.ServiceProviderService.fetchingServiceProviders(service))
    
    this.SpinnerService.requestEnded()
  }

  public ngOnInit(): void {
    this.service=this.ActivatedRoute.snapshot.params['service']
    this.getServiceProviders(this.service)
  }

}
