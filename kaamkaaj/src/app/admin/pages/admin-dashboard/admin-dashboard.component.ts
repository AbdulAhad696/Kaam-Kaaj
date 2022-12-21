import { Component, OnInit,ViewChild } from '@angular/core';
import { globalcomponent } from 'src/app/objects/global';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  public currency = globalcomponent.currency

  constructor() { }

  ngOnInit(): void {
  }

}
