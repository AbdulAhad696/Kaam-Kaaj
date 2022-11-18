import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gig-card',
  templateUrl: './gig-card.component.html',
  styleUrls: ['./gig-card.component.css']
})
export class GigCardComponent implements OnInit {
    Alljobgigs:any
    title:string
    description:string
    category:string
    clientrating:number
    location:string
    time:string

  constructor() { }

  ngOnInit(): void {

  }

  getdata(obj:any){
    // this.title=obj.title
    // this.description = obj.description
    // this.category = obj.category
    // this.clientrating = obj.clientrating
    // this.location = obj.location
    // this.time = obj.time

    console.log(obj)
    this.Alljobgigs=obj
  }

}
