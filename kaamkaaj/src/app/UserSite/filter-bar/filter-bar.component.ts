import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ResizedEvent } from 'angular-resize-event';
import { GetServicesService } from "src/app/Services/get-services/get-services.service";
import { lastValueFrom } from 'rxjs';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  trigger = 0;
  toggler = false;
  screenToggleChecker = true;
  constructor(private signinservice: SignInService, private services: GetServicesService, private router: Router, @Inject(DOCUMENT) document: Document) { }
  baseUrlFrontEnd = environment.baseUrlFronrEnd
  currentUser: any = this.signinservice.getusertype()
  allServices: any = []
  filterBarToggle() {
    (<HTMLInputElement>document.getElementById('sidebar')).classList.toggle('active')
  }

  ngOnInit(): void {
    this.getAllServices()
  }

  async getAllServices() {
    this.allServices = await lastValueFrom(this.services.fetchingServices())
  }

  // -------------------hide and sow side bar-----------------------
  sideBarToggler() {
    if (this.toggler == false) {
      document.getElementById("filterBarTogglerId")?.classList.remove("hide");
      document.getElementById("filterBarTogglerId")?.classList.add("show");
      this.toggler = true;
    }
    else if (this.toggler == true) {
      document.getElementById("filterBarTogglerId")?.classList.remove("show");
      document.getElementById("filterBarTogglerId")?.classList.add("hide");
      this.toggler = false;
    }
  }

  // -------------------------checking page width on resizing-----------------------------
  onResized(event: ResizedEvent) {
    if(window.innerWidth > 600 ){
      document.getElementById("filterBarTogglerId")?.classList.remove("hide");
      document.getElementById("filterBarTogglerId")?.classList.add("show");
      this.toggler = false
    }

    else if(window.innerWidth <= 600 && this.toggler == false ){
      document.getElementById("filterBarTogglerId")?.classList.remove("show");
      document.getElementById("filterBarTogglerId")?.classList.add("hide");
    }
  }
}
