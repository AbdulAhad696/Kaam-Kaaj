



import { Injectable } from '@angular/core';
import {environment} from './../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MyProjectService {
  constructor(private http:HttpClient) { }

// ------------------------getting service provider details---------------
getServiceProviderDetails(email:string){
  return this.http.get(`${environment.baseUrl}/serviceprovider/mydetails/${email}`)
  }



// Getting service provider projects
getServiceProviderProjects(_id:any){

  return this.http.get(`${environment.baseUrl}/serviceprovider/projects/${_id}`)
}



};
 


