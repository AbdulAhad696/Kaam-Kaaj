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
    editgig:any

  constructor() { }

  ngOnInit(): void {

  }

  getdata(obj:any){
    
    this.Alljobgigs=obj
  }

  openBidOverlay(obj:any){
    $('#exampleModalCenter').modal('toggle')
    this.editgig=obj
    console.log(this.editgig)
  }

}
