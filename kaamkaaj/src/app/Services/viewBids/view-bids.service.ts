import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {environment} from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ViewBidsService {

  constructor(private http:HttpClient) { }
  // ------------------------getting bids data---------------
  fetchingBidsData(id:string){
    return this.http.get(`${environment.baseUrl}/bids/${id}`)
  }

  changeBidStatus(id:any){
    return this.http.patch(`${environment.baseUrl}/bids/${id}`,{status:"rejected"})
  }
  acceptBid(id:any,userId:any){
    return this.http.patch(`${environment.baseUrl}/acceptbid/${id}/${userId}`,{status:"accepted"})
  }
}



