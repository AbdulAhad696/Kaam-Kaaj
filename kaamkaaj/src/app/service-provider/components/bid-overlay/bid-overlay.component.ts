import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, OnInit,Input } from '@angular/core';
import { ViewjobService } from 'src/app/Services/viewjob/viewjob.service';

@Component({
  selector: 'app-bid-overlay',
  templateUrl: './bid-overlay.component.html',
  styleUrls: ['./bid-overlay.component.css']
})
export class BidOverlayComponent implements OnInit {
  @Input() gig: any;
  bidamount:string
  bidDuration:string
  private amount:Number
  private duration:string
  date:Date
   currentDate:string
  constructor(private viewjobservice:ViewjobService) { 
    this.date = new Date();
    // this.currentDate=this.datepipe.transform(this.date, 'yyyy-MM-dd') || "";
  }

  ngOnInit(): void {
  }
  closeModal(){
    $('#exampleModalCenter').modal('toggle')
  }
  submitBid(){
    if (this.bidamount>this.gig.estAmount || this.bidamount==null || !_isNumberValue(this.bidamount)){
      alert("Enter an amount less than the budget!")
    }
    else{
      alert("good oye")
      this.closeModal()
      this.amount=parseInt(this.bidamount)
      this.bidamount=""
      this.viewjobservice.submitbid(this.amount,this.gig._id)
    }
  }
}
