import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewComplaintsService {
  constructor(private http:HttpClient) { }
// -----------getting all complaints from backend----------
  gettingAllComplaints(){
    return this.http.get(`${environment.baseUrl}/complaints`)
  }
}
