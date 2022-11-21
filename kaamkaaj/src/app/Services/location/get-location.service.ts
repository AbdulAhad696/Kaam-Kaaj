import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {
  constructor(private http:HttpClient) { }
  getAddress(latitude:any,longitude:any ) {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=`)
  };
}
