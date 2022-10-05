import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private http:HttpClient) { }
  getUsersApi(){
    return this.http.get(environment.baseUrl+'/signup')
    // .subscribe(res=>{
    //   console.log(res)
    //   return res
    
  };

  async registerUserApi(user:any){
    this.http.post(environment.baseUrl+'/signup',user).subscribe(res=>{
      return true
    })
  }
}
