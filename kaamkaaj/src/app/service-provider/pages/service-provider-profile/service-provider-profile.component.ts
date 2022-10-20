import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { EditSPModalComponent } from '../../../edit-spmodal/edit-spmodal.component';
// import * as $ from 'jquery';
import { SignInService } from './../../../Services/sign-in/sign-in.service';
import { ActivatedRoute } from '@angular/router';
import { ServiceProviderProfileService } from './../../../Services/serviceProviderProfile/service-provider-profile.service';
import { SpinnerService } from './../../../Services/spinner/spinner.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-service-provider-profile',
  templateUrl: './service-provider-profile.component.html',
  styleUrls: ['./service-provider-profile.component.css'],
  providers: [SignInService]
})
export class ServiceProviderProfileComponent implements OnInit {

  constructor(private SpinnerService: SpinnerService, private signinService: SignInService, private dialogRef: MatDialog, private ActivatedRoute: ActivatedRoute, private ServiceProviderProfileService: ServiceProviderProfileService) { }
  email: any
  serviceProviderProfile: any
  profile = {
    name: "Abdul Ahad",
    totalEarnings: "Rs. 12,000",
    totalExperience: "Rs. 12,000",
    jobsCompleted: 6,
    category: "Carpenter",
    address: "Baghbanpura, Lahore",
    rating: 5
  }

  loggedInUser = [{
    name: "Abdul Ahad",
    totalEarnings: "Rs. 12,000",
    totalExperience: "Rs. 12,000",
    jobsCompleted: 6,
    category: "Carpenter",
    address: "Baghbanpura, Lahore",
    rating: 4,
    role: 'Client'
  }]
  // ratings:any
  // noratings:any
  ratings = Array(this.loggedInUser[0].rating).fill(0);
  noratings = Array(5 - this.loggedInUser[0].rating).fill(0);
  async getProfile(email: any) {
    this.SpinnerService.requestStarted()
    // this.serviceProviderProfile = await lastValueFrom(this.ServiceProviderProfileService.fetchingServiceProviderProfile(email))
    this.SpinnerService.requestEnded()
  }
  openModal() {
    $('#exampleModalCenter').modal('toggle')
  }
  ngOnInit(): void {
    this.email = this.ActivatedRoute.snapshot.params['email']
    this.getProfile(this.email)
  }
}


