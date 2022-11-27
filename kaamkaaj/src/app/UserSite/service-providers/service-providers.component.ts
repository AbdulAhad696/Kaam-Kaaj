import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceProviderService } from '../../Services/serviceProvider/service-provider.service';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute, Router,NavigationEnd,Event } from '@angular/router';
import { SpinnerService } from '../../Services/spinner/spinner.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {
  searchText:any
  service: any
  serviceProviders: any = []
  imgUrl: string;
  constructor(private ServiceProviderService: ServiceProviderService, private ActivatedRoute: ActivatedRoute, private SpinnerService: SpinnerService, private router: Router) {
    
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.ngOnInit()
        }
      });
     
  }

  async getServiceProviders(service: any) {
    this.SpinnerService.requestStarted()
    this.serviceProviders = await lastValueFrom(this.ServiceProviderService.fetchingServiceProviders(service))
    // this.serviceProviders[0].profilePicture = environment.baseUrl + "/" + this.serviceProviders[0]?.profilePicture
    
    // console.log(this.serviceProviders[0])
    this.SpinnerService.requestEnded()
  }
  showServiceProviderProfile(email: any) {
    this.router.navigate([`customer-mainpage/serviceprovider/profile/${email}`])
  }
  public ngOnInit(): void {
    this.service = this.ActivatedRoute.snapshot.params['service']
    this.getServiceProviders(this.service)

  }

}
