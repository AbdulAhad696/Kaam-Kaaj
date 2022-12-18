import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SubmitJobByWorkerService {

  constructor(private http:HttpClient) { }


  submitJob(id:any,data:any){

    return this.http.patch(`${environment.baseUrl}/serviceProvider/doneProject/${id}`,data)
  }



}
