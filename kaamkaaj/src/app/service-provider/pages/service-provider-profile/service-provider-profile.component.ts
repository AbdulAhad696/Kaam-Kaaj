import { ArrayType } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { EditSPModalComponent } from '../../components/edit-spmodal/edit-spmodal.component';

import { SignInService } from './../../../Services/sign-in/sign-in.service';
import { ActivatedRoute } from '@angular/router';
import { ServiceProviderProfileService } from './../../../Services/serviceProviderProfile/service-provider-profile.service';
import { SpinnerService } from './../../../Services/spinner/spinner.service';
import { lastValueFrom } from 'rxjs';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service-provider-profile',
  templateUrl: './service-provider-profile.component.html',
  styleUrls: ['./service-provider-profile.component.css'],
  providers: [SignInService]
})
export class ServiceProviderProfileComponent implements OnInit, OnChanges {
  usertype: any;
  imageUrl: string
  domain: string = environment.baseUrl
  constructor(private spProfileService: ServiceProviderProfileService, private SpinnerService: SpinnerService, private signinService: SignInService, private ActivatedRoute: ActivatedRoute, private ServiceProviderProfileService: ServiceProviderProfileService) { }
  email: any
  serviceProviderProfile: any

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
    window.location.reload()
  }
  async getProfile(email: any) {
    this.SpinnerService.requestStarted()
    this.serviceProviderProfile = await lastValueFrom(this.ServiceProviderProfileService.fetchingServiceProviderProfile(email))
    this.serviceProviderProfile[0].profilePicture = environment.baseUrl + "/" + this.serviceProviderProfile[0].profilePicture
    console.log(this.serviceProviderProfile)
    this.SpinnerService.requestEnded()
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
      window.location.reload()
    }
  }

  ngOnInit(): void {
    this.email = this.ActivatedRoute.snapshot.params['email']
    this.getProfile(this.email)
    this.usertype = this.signinService.getusertype()
    console.log(this.usertype)
  }
  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit()

  }
}