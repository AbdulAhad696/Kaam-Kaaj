import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router,Event } from '@angular/router';


@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
})
export class AdminMainComponent implements OnInit {
  public isCollapsed = false;
  currentPage:string
  CurrentpageTitle:string
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentPage = this.router.url
        if(this.currentPage.includes("wallet")){
          this.CurrentpageTitle ="Wallet"
        } 
        else if(this.currentPage.includes("jobs")){
          this.CurrentpageTitle ="Job History"
        }
        else if(this.currentPage.includes("categories")){
          this.CurrentpageTitle = "Categories"
        }
        else if(this.currentPage.includes("serviceproviders")){
          this.CurrentpageTitle = "All Service Providers"
        }
        else if(this.currentPage.includes("complains")){
          this.CurrentpageTitle = "Complains"
        }
        else{
          this.CurrentpageTitle = "Dashboard"
        }
      }
    });
   }

  ngOnInit(): void 
  {
    this.currentPage=this.router.url
    this.CurrentpageTitle="Dashboard"
  }

}
