import { _isNumberValue } from '@angular/cdk/coercion';
import { DatePipe } from '@angular/common';
import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import { ViewjobService } from 'src/app/Services/viewjob/viewjob.service';

@Component({
  selector: 'app-bid-overlay',
  templateUrl: './bid-overlay.component.html',
  styleUrls: ['./bid-overlay.component.css']
})
export class BidOverlayComponent implements OnInit,OnChanges {
  @Input() gig: any;
  // hiddenImgOverlay:boolean
  bidamount:string
  bidDuration:string
  private amount:number
  private duration:number
  // date:date
  currentDate:string
  gigImages:[]
  constructor(private viewjobservice:ViewjobService,private datePipe:DatePipe) { 
    // this.hiddenImgOverlay=false;
  }

  ngOnInit(): void {
  }
  closeModal(){
    $('#exampleModalCenter').modal('toggle')
  }
  submitBid(){
    if (this.bidamount>this.gig.estAmount || this.bidamount==null || !_isNumberValue(this.bidamount)){
      
    }
    else{
      this.closeModal()
      this.amount=parseInt(this.bidamount)
      this.bidamount=""
      this.duration=parseInt(this.bidDuration)
      this.bidDuration=""
      console.log("JOB ID:",this.gig._id)
      this.viewjobservice.submitbid(this.amount,this.gig._id,this.duration)
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.gig)
    if(this.gig!=null){
      this.gig.estCompletionTime = this.datePipe.transform(this.gig?.estCompletionTime, 'short');
    }
  }
  reOpenModal(){
    $('#exampleModalCenter').modal('toggle') 
    $('#imgoverlay').modal('toggle')
    this.gigImages=[]
  }
  openImgOverlay(gigpics){
    this.gigImages = gigpics
    // this.hiddenImgOverlay=true
    
    $('#exampleModalCenter').modal('toggle')
    $('#imgoverlay').modal('toggle')
  }
}
