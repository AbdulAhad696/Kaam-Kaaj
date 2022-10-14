import { Component, OnInit,ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import {ContactService} from '../Services/contact/contact.service'
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers:[ContactService]
})
export class ContactUsComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  //input
  nameInput="";
  mailInput="";
  numInput="";
  concernInput="";
  
  //data to send
  private Name="";
  private mail="";
  private number="";
  private concern="";

  //
  response:any;
  success:any;

  zoom = 12;
  center: google.maps.LatLngLiteral = {lat: 31.5780987, lng: 74.356928};
  markerPosition = this.center;

  constructor(private contactservice:ContactService) { }


  ngOnInit(): void {
  }
  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  async SubmitConcern(){
    this.Name=this.nameInput;
    this.number=this.numInput;
    this.mail=this.mailInput;
    this.concern=this.concernInput;
    this.nameInput="";
    this.numInput="";
    this.mailInput="";
    this.concernInput="";
    //make an object
    var reservation={
      name:this.Name,
      email:this.mail,
      phoneNumber:this.number,
      message:this.concern
    }
    
    this.response=await lastValueFrom(this.contactservice.reserve(reservation));
    if(this.response){
      this.success=true;
    }
    else{
      this.success=false;
    }
    }
  }

