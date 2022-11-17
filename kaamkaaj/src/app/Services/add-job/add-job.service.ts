import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddJobService {
  constructor(private http:HttpClient) { }
// ---------------------posting job---------------------------
  // postJobApi(job:any){
    // return this.http.post(environment.baseUrl+"/addJobs" ,job )
  // }
// ------------------------getting specific job object---------------
  getSpecificJob(service:string){
    return this.http.get(`${environment.baseUrl}/services/${service}`)
  }
}
 