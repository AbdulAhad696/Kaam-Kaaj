// import { Injectable } from '@angular/core';
// import { HttpClient,HttpParams } from '@angular/common/http';
// import { environment } from './../../../environments/environment';


// @Injectable({
//   providedIn: 'root'
// })
// export class MyProjectService {

//   constructor(private http:HttpClient) { }


//   getServiceProviderDetails(email:any){
//     alert(email);
//     alert(`${environment.baseUrl}/serviceprovider/mydetails/${email}`)
//     // this.http.get(`${environment.baseUrl}/serviceprovider/mydetails/${email}`);
//     this.http.get(`${environment.baseUrl}/serviceprovider/mydetails/${email}`)
//     alert("Hee")

//   }
// }




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
  return this.http.get(environment.baseUrl+'/serviceprovider/mydetails/umairahmedpaki72gmail.com')
  }



// Getting service provider projects
getServiceProviderProjects(_id:any){
  return this.http.get(`${environment.baseUrl}/serviceprovider/projects/${_id}`)
}



};
 


