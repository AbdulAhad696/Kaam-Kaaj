import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }
  findUserLogin() {
    return this.http.get(environment.baseUrl + '/signin')
  };
}
