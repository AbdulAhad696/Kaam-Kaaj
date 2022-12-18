import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';


@Injectable({
  providedIn: 'root'
})
export class SubmitJobByWorkerService {

  constructor(private http:HttpClient,private SignInService:SignInService) { }


  submitJob(id:any,data:any){
    if(this.SignInService.getusertype()=="Worker"){

      return this.http.patch(`${environment.baseUrl}/serviceProvider/doneProject/${id}`,data)
    }else{
      return this.http.patch(`${environment.baseUrl}/client/doneProject/${id}`,data)
    }
  }



}
