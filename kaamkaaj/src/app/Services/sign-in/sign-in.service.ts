import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import *  as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private key = "the4horsemen";
  constructor(private http: HttpClient) { }

  storeinlocalstorage(credentials: any) {
    localStorage.setItem("_id", credentials._id)
    localStorage.setItem("phonenumber", this.encrypt(credentials.phoneNumber || ""));
    localStorage.setItem("usertype", credentials.role || "");
    localStorage.setItem("username", this.encrypt(credentials.userName || ""))
    localStorage.setItem("email", this.encrypt(credentials.email || ""));
    localStorage.setItem("password", this.encrypt(credentials.password || ""));
    localStorage.setItem("address", this.encrypt(credentials.address || ""));
  }

  getdata() {

    let data = localStorage.getItem("email") || "";
    return this.decrypt(data);
  }

  getId() {
    if (localStorage.getItem("_id")) {
      let data = localStorage.getItem("_id") || "";
      return data;
    }
    return false;
  }



  getusertype() {
    return localStorage.getItem("usertype");
  }

  getcontactinfo() {
    return {
      name: this.decrypt(localStorage.getItem("username") || ""),
      email: this.decrypt(localStorage.getItem("email") || ""),
      phoneNumber: this.decrypt(localStorage.getItem("phonenumber") || ""),
      address: this.decrypt(localStorage.getItem("address") || ""),
      type: localStorage.getItem("usertype")
    }
  }

  clearsession() {
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

  findUserLogin(credentials: any) {
    console.log(environment.baseUrl + '/signin');
    return this.http.get(`${environment.baseUrl}/signin/${credentials.email}/${credentials.password}`);
  }
}
