import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ServiceProviderService } from '../../Services/serviceProvider/service-provider.service';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { SpinnerService } from '../../Services/spinner/spinner.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {
  searchText: any
  service: any
  serviceProviders: any = []
  imgUrl: string;
  @Input() userType: any;
  activeButton: string = "rating"
  currentLocation: any
  enabledDisabled: any

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
    console.log(this.serviceProviders)
    this.serviceProviders.forEach(element => {
      element.profilePicture = environment.baseUrl + "/" + element.profilePicture

    });
    this.serviceProviders.sort((a: any, b: any) => (a?.rating > b?.rating ? -1 : 1));
    this.serviceProviders.forEach(element => {
      element.currentDistance = this.distance(element.serviceProviderDetails[0].location.latitude, this.currentLocation.latitude, element.serviceProviderDetails[0].location.longitude, this.currentLocation.longitude)
    });
    // console.log(this.serviceProviders[0])
    setTimeout(() => {
      this.SpinnerService.requestEnded()
    }, 2000)
  }
  showServiceProviderProfile(email: any) {
    this.router.navigate([`../../serviceprovider/profile/${email}`], { relativeTo: this.ActivatedRoute })
  }
  public ngOnInit(): void {
    this.service = this.ActivatedRoute.snapshot.params['service']
    this.getServiceProviders(this.service)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.currentLocation = { latitude: pos.coords.latitude, longitude: pos.coords.longitude }
      });
    }

  }

  fillterButtonClick(value: any) {
    this.activeButton = value
    this.enabledDisabled = ""
    switch (value) {

      case "rating":
        this.serviceProviders.sort((a: any, b: any) => (a?.rating > b?.rating ? -1 : 1));
        break;
      case "jobsCompleted":
        this.serviceProviders.sort((a: any, b: any) => (a?.jobsCompleted > b?.jobsCompleted ? -1 : 1));
        break;
      case "earning":
        this.serviceProviders.sort((a: any, b: any) => (a?.totalEarning > b?.totalEarning ? -1 : 1));
        break;
      case "experience":
        this.serviceProviders.sort((a: any, b: any) => (a?.experience > b?.experience ? -1 : 1));
        break;
      case "enabled":
        this.enabledDisabled = "enabled"
        break;
      case "disabled":
        this.enabledDisabled = "disabled"
        break;
      case "location":
        this.serviceProviders.sort((a: any, b: any) => (a?.currentDistance > b?.currentDistance ? 1 : -1));
    }
  }
  distance(lat1: any, lat2: any, lon1: any, lon2: any) {

    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
      + Math.cos(lat1) * Math.cos(lat2)
      * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    return ((c * r).toFixed(2));
  }
}


