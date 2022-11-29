import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { ViewBidsService } from '../../Services/viewBids/view-bids.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bidings',
  templateUrl: './bidings.component.html',
  styleUrls: ['./bidings.component.css']
})
export class BidingsComponent implements OnInit {
  constructor(private router: Router, private ViewBidsService: ViewBidsService) { }
  allBids: any;

  // ---------------------------getting  all bids data------------------------
  async gettingBidsData(id:string) {
    this.allBids = await lastValueFrom(this.ViewBidsService.fetchingBidsData(id))
    for(let i = 0 ; i < this.allBids[0].serviveProviderDetails.length ; i++){
      this.allBids[0].serviveProviderDetails[i].profilePicture = `${environment.baseUrl}/${this.allBids[0].serviveProviderDetails[i].profilePicture}`
    }
  }

  ngOnInit(): void {
    this.gettingBidsData('638145605b870b004f8d1510');

  }

}
