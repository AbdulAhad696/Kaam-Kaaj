import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewBidsService } from '../../Services/viewBids/view-bids.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bidings',
  templateUrl: './bidings.component.html',
  styleUrls: ['./bidings.component.css']
})
export class BidingsComponent implements OnInit {
  constructor(private router: Router, private ViewBidsService: ViewBidsService, private ActivatedRoute: ActivatedRoute) { }
  allBids: any;
  searchText:any
  activeButton:string="amount"



  // ---------------------------getting  all bids data------------------------
  async gettingBidsData(id:string) {
    this.allBids = await lastValueFrom(this.ViewBidsService.fetchingBidsData(id))
    this.allBids.forEach(element => {
      element.serviveProviderDetails[0].profilePicture = environment.baseUrl + "/" + element.serviveProviderDetails[0].profilePicture
    });
    this.allBids.sort((a:any, b:any) => (a?.amount > b?.amount ? 1 : -1));
  }


  async changeBidStatus(id:any){
    const result=await lastValueFrom(this.ViewBidsService.changeBidStatus(id))
    this.ngOnInit()
  }

  fillterButtonClick(value:any){
    this.activeButton=value
    switch(value){
      case "amount":
        this.allBids.sort((a:any, b:any) => (a?.amount > b?.amount ? 1 : -1));
        break;
      case "duration":
        this.allBids.sort((a:any, b:any) => (a?.duration > b?.duration ? 1 : -1));
        break;

    }
  }
  async acceptBid(id:any,userId:any){
    await lastValueFrom(this.ViewBidsService.acceptBid(id,userId)) 
    this.router.navigate(['/customer-mainpage/jobs'])
  }

  ngOnInit(): void {
    this.gettingBidsData(this.ActivatedRoute.snapshot.params['id']);

  }

}
