import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from './../../../environments/environment'



@Injectable({
  providedIn: 'root'
})
export class ClientProjectsService {

  constructor(private http:HttpClient) { }

  getClientDetails(email:string){
    return this.http.get(`${environment.baseUrl}/client/mydetails/${email}`)
    }
  getClientProjects(_id:any){
    return this.http.get(`${environment.baseUrl}/client/projects/${_id}`)
  }
    
  
}
