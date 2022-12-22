import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { GetServicesService } from 'src/app/Services/get-services/get-services.service';
import { SpinnerService } from 'src/app/Services/spinner/spinner.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private router: Router, private spinnerService: SpinnerService, private serviceService: GetServicesService) { }
  serviceName: string;
  domain = environment.baseUrl
  URL: string | ArrayBuffer | undefined;
  showAlert = false

  async addService() {
    // if (this.URL != undefined)
    this.showAlert = false

    console.log(this.URL)
    // console.log(this.serviceName.match(/^[a-zA-Z\s]*$/))

    if (this.URL != undefined && this.serviceName?.match(/^[a-zA-Z\s]*$/) != null) {

      var formData = new FormData();
      var imagefile: any = document.querySelector('#imageCapturer');
      // console.log("GEEEEEEEEE")
      formData.append("url", imagefile.files[0]);
      formData.append("rating", "0");
      formData.append("tittle", this.serviceName);
      // console.log(formData)
      this.spinnerService.requestStarted()
      await lastValueFrom(this.serviceService.createServices(formData)).then(() => {

      })
      this.spinnerService.requestEnded()
      let currenturl = this.router.url
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currenturl]);
      });

      // alert("Yeh service agr add hogai to component reload karwana hai")
    }
    else {
      this.showAlert = true
    }

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
  ngOnInit(): void {
  }

}
