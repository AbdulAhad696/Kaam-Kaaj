import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from "@angular/common/http";
import { environment } from "./../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetServicesService {
  constructor(private http:HttpClient) { } 

  fetchingServices(){
    return (this.http.get(`${environment.baseUrl}/services`))
  }
}
