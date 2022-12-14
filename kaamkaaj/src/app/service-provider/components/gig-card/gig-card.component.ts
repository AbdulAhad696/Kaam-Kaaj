import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
import { ServiceProviderService } from 'src/app/Services/serviceProvider/service-provider.service';
import { lastValueFrom } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gig-card',
  templateUrl: './gig-card.component.html',
  styleUrls: ['./gig-card.component.css']
})
export class GigCardComponent implements OnInit, OnChanges {
  @Input() Alljobgigs: any
  title: string
  description: string
  category: string
  clientrating: number
  location: string
  time: string
  editgig: any
  loggedin: any
  searchText: any
  activeButton: string = "amount"
  constructor(private signinservice: SignInService, private router: Router, private serviceProvideDataService: ServiceProviderService) {
    this.loggedin = this.signinservice.getusertype();
  }




  async openBidModal() {
    var spData = await lastValueFrom(this.serviceProvideDataService.fetchSPData(this.signinservice.getId()))
    console.log(spData)
    if (spData[0]?.balance >= 500) {
      this.router.navigate(["/service-provider/wallet"]);
    }
    else {
      alert("Open Bid Modal")
    }
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let ndate;
    if (this.Alljobgigs != null) {
      this.Alljobgigs.forEach(element => {
        ndate = new Date(element.jobPostDate).toDateString();
        element.jobPostDate = ndate;
      });
    }
  }

  openBidOverlay(obj: any) {
    $('#exampleModalCenter').modal('toggle')
    this.editgig = obj
    console.log(this.editgig)
  }
  filterButtonClick(value: any) {
    this.activeButton = value
    switch (value) {
      case "amount":
        this.Alljobgigs.sort((a: any, b: any) => (a?.estAmount > b?.estAmount ? 1 : -1));
        break;
      case "duration":
        this.Alljobgigs.sort((a: any, b: any) => (a?.estCompletionTime > b?.estCompletionTime ? 1 : -1));
        break;

    }
  }


}
