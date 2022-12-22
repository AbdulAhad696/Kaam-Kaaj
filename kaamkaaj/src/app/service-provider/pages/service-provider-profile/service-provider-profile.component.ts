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
  constructor(private route: ActivatedRoute, private spProfileService: ServiceProviderProfileService, private SpinnerService: SpinnerService, private signinService: SignInService, private ActivatedRoute: ActivatedRoute, private ServiceProviderProfileService: ServiceProviderProfileService, private router: Router) { }
  email: any
  serviceProviderProfile: any
  currentServiceProviderCategory: any
  reviews: any
  category = this.signinService.getCategory()
  delete:boolean
  setDelete(setval:boolean){
    this.delete=setval
    $('#exampleModalCenter').modal('toggle')
    this.deleteimg()
  }

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
    if (this.serviceProviderProfile) {
      this.serviceProviderProfile[0].serviceProviderDetails[0].profilePicture = environment.baseUrl + "/" + this.serviceProviderProfile[0]?.serviceProviderDetails[0]?.profilePicture
      console.log(this.serviceProviderProfile)
      this.currentServiceProviderCategory = this.serviceProviderProfile[0]?.serviceDetails[0]?.tittle;
    }
    setTimeout(() => {
      this.SpinnerService.requestEnded()
    }, 3000)

  }
  openModal() {

    $('#exampleModalCenter').modal('toggle')
  }
  async deletePortfolioImage(image: string) {
    this.imageUrl = image.replace(environment.baseUrl + "/", "")
    $('#exampleModalCenter').modal('toggle')
  }

  async deleteimg(){
    if (this.delete) {
      this.SpinnerService.requestStarted()
      await lastValueFrom(this.ServiceProviderProfileService.deletePortfolioImage(this.email, this.imageUrl))
      setTimeout(() => {
        this.SpinnerService.requestEnded()
      }, 2000)
      this.ngOnInit()
    }
  }
  async getReviews() {
    this.reviews = await lastValueFrom(this.ServiceProviderProfileService.fetchReviews(this.ActivatedRoute.snapshot.params["email"]))
    console.log(this.reviews)
  }

  // -------------------------handling sending proposal-------------------------
  handleSendProposal() {
    this.router.navigate([`customer-mainpage/jobgigs/${this.serviceProviderProfile[0]?.serviceDetails[0]?.tittle}/${this.serviceProviderProfile[0]?.serviceProviderDetails[0].serviceProvider}`])
  }
  initializeData() {
    console.log("Chal Bhai")
    // console.log(this.ActivatedRoute.snapshot)
    this.email = this.ActivatedRoute.snapshot.params['email'];
    console.log(this.email)
    this.getProfile(this.email)
    this.usertype = this.signinService.getusertype()
    console.log(this.usertype)
    this.loggedInUserType = this.signinService.getusertype();
    this.getReviews()
    // this.ngOnInit()
  }
  async toggleStatus() {
    let data = {
      "id": this.serviceProviderProfile[0]?._id,
      "status": this.serviceProviderProfile[0]?.serviceProviderDetails[0]?.status
    }
    await lastValueFrom(this.ServiceProviderProfileService.toggleProfileStatus(data)).then((doc) => {
      this.refreshPage()
    })
  }
  refreshPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.navigate(['./'], { relativeTo: this.route })
  }
  ngOnInit(): void {
    this.initializeData()
  }
  ngOnChanges(changes: SimpleChanges) {
  }

}