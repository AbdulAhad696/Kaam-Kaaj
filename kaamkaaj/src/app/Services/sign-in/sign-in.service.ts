import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private http: HttpClient) { }


  findUserLogin(credentials: any) {
    console.log(environment.baseUrl + '/signin');
    return this.http.get(`${environment.baseUrl}/signin/${credentials.email}/${credentials.password}`)
    // .subscribe(data => {
    //   console.log(data)
    // })

  };
}
