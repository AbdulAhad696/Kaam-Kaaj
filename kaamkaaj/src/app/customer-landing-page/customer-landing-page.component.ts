import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-landing-page',
  templateUrl: './customer-landing-page.component.html',
  styleUrls: ['./customer-landing-page.component.css']
})
export class CustomerLandingPageComponent implements OnInit {

  constructor(private router:Router) { }

  handleViewMoreCategory() {
    this.router.navigate(['/services'])
  } 

  ngOnInit(): void {
  }

}
