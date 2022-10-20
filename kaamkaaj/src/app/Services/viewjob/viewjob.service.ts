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
    console.log("here",this.email)
    return await lastValueFrom(this.http.get(`${environment.baseUrl}/service-provider/viewjobs/${this.email}`))
  }
  async getjobs(cat:string){
    return await lastValueFrom(this.http.get(`${environment.baseUrl}/service-provider/viewjobs/categoryjobs/${cat}`))
  }
}
