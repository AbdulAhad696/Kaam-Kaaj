import { Component, OnInit,ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;


  zoom = 12;
  center: google.maps.LatLngLiteral = {lat: 31.5780987, lng: 74.356928};
  markerPosition = this.center;

  constructor() { }


  ngOnInit(): void {
  }
  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

}
