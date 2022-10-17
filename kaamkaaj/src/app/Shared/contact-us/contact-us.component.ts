import { Component, OnInit,ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import {ContactService} from 'src/app/Services/contact/contact.service'
import { lastValueFrom } from 'rxjs';
import { Router,Event, NavigationEnd} from '@angular/router';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';

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

  //current user
  currentuser:any;
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

  constructor(private router:Router,private contactservice:ContactService,private signinservice:SignInService) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          this.currentuser=this.signinservice.getusertype();
      }
    });
  }
  reservation:any;

  ngOnInit(): void {
  }
  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  async SubmitConcern(){
    if (this.currentuser==null){  
      this.Name=this.nameInput;
      this.number=this.numInput;
      this.mail=this.mailInput;
      this.concern=this.concernInput;
      this.nameInput="";
      this.numInput="";
      this.mailInput="";
      this.concernInput="";
      //make an object
      this.reservation={
        name:this.Name,
        email:this.mail,
        phoneNumber:this.number,
        message:this.concern,
        usertype:"None"
      }
    }
    else{
      this.concern=this.concernInput;
      this.concernInput="";
      let cred;
      cred = this.signinservice.getcontactinfo();
      this.reservation={
        name:cred.name,
        email:cred.email,
        phoneNumber:cred.phoneNumber,
        message:this.concern,
        usertype:cred.type
      }  //edit to send data of current user that is logged in
    }
    this.response=await lastValueFrom(this.contactservice.reserve(this.reservation));
    if(this.response){
      this.success=true;
    }
    else{
      this.success=false;
    }
    
  }
}

