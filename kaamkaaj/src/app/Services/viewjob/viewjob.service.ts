import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInService } from '../sign-in/sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class ViewjobService {
  response:any
  email:any
  constructor(private signinservice:SignInService,private http:HttpClient) { }

  async getcategory(){
    this.email = await (this.signinservice.getdata())
    
    return await lastValueFrom(this.http.get(`${environment.baseUrl}/service-provider/viewjobs/${this.email}`))
    
  }
  async getjobs(cat:string){
    let id = this.signinservice.getId()
    return await lastValueFrom(this.http.get(`${environment.baseUrl}/service-provider/viewjobs/categoryjobs/${cat}/${id}`))
  }
  async submitbid(bidamount:number,id1:string,duration:number){
    let mail = await this.signinservice.getemail()
    
    let obj={
      duration:duration,
      amount:bidamount,
      email: mail,
      id:id1
    }
    await lastValueFrom(this.http.patch(`${environment.baseUrl}/service-provider/viewjobs`,obj))
    return
  }
  getClientJobs(userId:any){
    return this.http.get(`${environment.baseUrl}/customer-mainpage/jobs/${userId}`);
    
  }
}
