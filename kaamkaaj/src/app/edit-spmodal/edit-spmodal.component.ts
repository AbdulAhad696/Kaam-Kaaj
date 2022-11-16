import { createInjectableType } from '@angular/compiler';
import { Component, OnInit, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetServicesService } from '../Services/get-services/get-services.service';
import { lastValueFrom } from 'rxjs';
import { ServiceProviderProfileService } from '../Services/serviceProviderProfile/service-provider-profile.service';
import { SpinnerService } from '../Services/spinner/spinner.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-spmodal',
  templateUrl: './edit-spmodal.component.html',
  styleUrls: ['./edit-spmodal.component.css'],
  providers: [ServiceProviderProfileService]
})
export class EditSPModalComponent implements OnInit, OnChanges {
  URL: string | ArrayBuffer | undefined = environment.baseUrl
  @Input() profile: any;
  allService: any;
  editedAddress: any;
  editedName: string;
  editedCategory: string;


  constructor(private router: Router, private getServices: GetServicesService, private SpinnerService: SpinnerService, private spProfileService: ServiceProviderProfileService) {
  }


  closeModal() {
    $('#exampleModalCenter').modal('toggle')
  }

  useImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // Read file as data url
      reader.onloadend = (e) => { // function call once readAsDataUrl is completed  
        console.log(e.target?.result)
        if (e.target?.result) {
          this.URL = e.target?.result
        }
      }
    };
  }
  async updateProfile() {
    var formData = new FormData();
    var imagefile: any = document.querySelector('#imageCapturer');
    console.log(imagefile)
    console.log(imagefile.files[0]);
    formData.append("url", imagefile.files[0]);
    formData.append("email", this.profile[0].serviceProviderDetails[0].email);
    formData.append("name", this.editedName);
    formData.append("address", this.editedAddress);
    formData.append("category", this.editedCategory);

    this.SpinnerService.requestStarted()
    this.closeModal()
    await lastValueFrom(this.spProfileService.updateServiceProviderProfile(formData))
    setTimeout(() => {
      this.SpinnerService.requestEnded()
    }, 1000)
    window.location.reload()
  }
  async getAllServices() {
    this.allService = await lastValueFrom(this.getServices.fetchingServices())
    console.log(this.allService)
  }
  getCategory(event: any) {
    this.editedCategory = (event.target as HTMLInputElement).value
  }

  ngOnInit(): void {
    this.getAllServices()
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.editedAddress = this.profile[0].serviceProviderDetails[0].address
    this.editedName = this.profile[0].serviceProviderDetails[0].userName
    this.editedCategory = this.profile[0].serviceDetails[0].tittle
    this.URL = this.profile[0].profilePicture
  }


}
