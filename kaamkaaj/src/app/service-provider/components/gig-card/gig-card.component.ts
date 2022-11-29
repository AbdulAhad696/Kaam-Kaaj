import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gig-card',
  templateUrl: './gig-card.component.html',
  styleUrls: ['./gig-card.component.css']
})
export class GigCardComponent implements OnInit,OnChanges {
  @Input() Alljobgigs : any
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

  ngOnChanges(changes: SimpleChanges): void {
    let ndate;
    if(this.Alljobgigs!=null){
      this.Alljobgigs.forEach(element => {
        ndate=new Date(element.jobPostDate).toDateString();
        element.jobPostDate = ndate;
      });
    }
  }
    
  

  openBidOverlay(obj:any){
    $('#exampleModalCenter').modal('toggle')
    this.editgig=obj
    console.log(this.editgig)
  }

}
