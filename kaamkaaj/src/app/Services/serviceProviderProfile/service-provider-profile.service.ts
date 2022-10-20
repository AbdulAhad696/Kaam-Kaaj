import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from "@angular/common/http";
import { environment } from "./../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderProfileService {
  constructor(private http:HttpClient) { } 

  fetchingServiceProviderProfile(email:any){
    return (this.http.get(`${environment.baseUrl}/serviceprovider/profile/${email}`))
  }
}




