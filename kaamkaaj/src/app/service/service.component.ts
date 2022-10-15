import { Component, OnInit,Input } from '@angular/core';
import { RatingComponent } from './../rating/rating.component';
import { angularMath } from 'angular-ts-math/dist/angular-ts-math/angular-ts-math';




@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent  implements OnInit  {
  @Input() rating:RatingComponent
  constructor()  {
    
  } 
  services:any[]=[{name:"Electrician",rating:"4.5"},{name:"Carpenter",rating:"3.25"},{name:"Movers",rating:"1.75"},{name:"Mashpion",rating:"5"},{name:"Mashpion",rating:"5"}]
  ngOnInit(): void {
  }

}
