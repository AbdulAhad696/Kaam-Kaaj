import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private http: HttpClient) { }

  loggedInUser: any = []

  findUserLogin(credentials: any) {
    console.log(environment.baseUrl + '/signin');
    this.loggedInUser = this.http.get(`${environment.baseUrl}/signin/${credentials.email}/${credentials.password}`);
    return this.loggedInUser;


  };
}
