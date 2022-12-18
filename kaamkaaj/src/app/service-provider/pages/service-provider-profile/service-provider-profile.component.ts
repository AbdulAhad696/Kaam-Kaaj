import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

import { SignInService } from './../../../Services/sign-in/sign-in.service';
import { ActivatedRoute } from '@angular/router';
import { ServiceProviderProfileService } from './../../../Services/serviceProviderProfile/service-provider-profile.service';
import { SpinnerService } from './../../../Services/spinner/spinner.service';
import { lastValueFrom } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-provider-profile',
  templateUrl: './service-provider-profile.component.html',
  styleUrls: ['./service-provider-profile.component.css'],
  providers: [SignInService]
})
export class ServiceProviderProfileComponent implements OnInit, OnChanges {
  usertype: any;
  loggedInUserType: string | null;
  imageUrl: string
  domain: string = environment.baseUrl
  constructor(private spProfileService: ServiceProviderProfileService, private SpinnerService: SpinnerService, private signinService: SignInService, private ActivatedRoute: ActivatedRoute, private ServiceProviderProfileService: ServiceProviderProfileService, private router: Router) { }
  email: any
  serviceProviderProfile: any
  currentServiceProviderCategory: any
  reviews: any
  category = this.signinService.getCategory()

  async useImage(event: any) {
    var formData = new FormData();
    var imagefile: any = document.querySelector('#portfolioImageCapturer');
    console.log(imagefile.files[0]);
    formData.append("url", imagefile.files[0]);
    formData.append("email", this.email);
    this.SpinnerService.requestStarted()
    await lastValueFrom(this.spProfileService.uploadPortfolioImage(formData))
    setTimeout(() => {
      this.SpinnerService.requestEnded()
    }, 1000)
    this.ngOnInit()
  }
  async getProfile(email: any) {
    this.SpinnerService.requestStarted()
    console.log("request started")
    this.serviceProviderProfile = await lastValueFrom(this.ServiceProviderProfileService.fetchingServiceProviderProfile(email))
    console.log("last value from")
    console.log(this.serviceProviderProfile)
    this.ngOnInit
    this.serviceProviderProfile[0].profilePicture = environment.baseUrl + "/" + this.serviceProviderProfile[0].profilePicture
    console.log(this.serviceProviderProfile)
    this.SpinnerService.requestEnded()
    this.currentServiceProviderCategory = this.serviceProviderProfile[0]?.serviceDetails[0]?.tittle;

  }
  openModal() {

    $('#exampleModalCenter').modal('toggle')
  }
  async deletePortfolioImage(image: string) {
    let imageUrl = image.replace(environment.baseUrl + "/", "")
    if (confirm("Are you sure you want to delete the image?")) {
      this.SpinnerService.requestStarted()
      await lastValueFrom(this.ServiceProviderProfileService.deletePortfolioImage(this.email, imageUrl))
      this.SpinnerService.requestEnded()
      this.ngOnInit()
    }
  }
  async getReviews() {
    this.reviews = await lastValueFrom(this.ServiceProviderProfileService.fetchReviews(this.signinService.getId()))
    console.log(this.reviews)
  }

  // -------------------------handling sending proposal-------------------------
  handleSendProposal() {
    this.router.navigate([`customer-mainpage/jobgigs/${this.serviceProviderProfile[0]?.serviceDetails[0]?.tittle}`])
  }
  async ngOnInit() {
    this.email = this.ActivatedRoute.snapshot.params['email']
    console.log("HERE")
    await (this.getProfile(this.email))
    console.log("after get")
    this.usertype = this.signinService.getusertype()
    console.log(this.usertype)
    this.loggedInUserType = this.signinService.getusertype();
    this.getReviews()

  }
  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit()
  }

}