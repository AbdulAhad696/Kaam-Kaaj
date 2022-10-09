import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private http:HttpClient) { }
  getUsersApi(user:any ) {
    // return this.http.get(environment.baseUrl+'/signup/'+user.email,user)

    // .subscribe(res=>{
    //   return res
    // })
    
    return this.http.get(`${environment.baseUrl}/signup/${user.email}`)
    // .subscribe((res => {
    //   return res
    // }));
    

  };
  

  registerUserApi(user:any){
    return this.http.post(environment.baseUrl+'/signup',user)
    // .subscribe(res=>{
    //   return true
    // })

  }
}
