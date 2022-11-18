import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router,NavigationEnd,Event } from '@angular/router';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  trigger=0;
  constructor(private router:Router) {
    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.trigger++;
    //   }
    // });
   }
  baseUrlFrontEnd=environment.baseUrlFronrEnd

  ngOnInit(): void {
    // console.log(this.trigger)
  }

}
