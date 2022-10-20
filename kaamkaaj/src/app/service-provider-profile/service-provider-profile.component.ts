import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../Services/sign-in/sign-in.service';
import { MatDialog } from "@angular/material/dialog"
import { EditSPModalComponent } from '../edit-spmodal/edit-spmodal.component';

@Component({
  selector: 'app-service-provider-profile',
  templateUrl: './service-provider-profile.component.html',
  styleUrls: ['./service-provider-profile.component.css'],
  providers: [SignInService]
})
export class ServiceProviderProfileComponent implements OnInit {

  constructor(private signinService: SignInService, private dialogRef: MatDialog) { }
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
  ratings = Array(this.loggedInUser[0].rating).fill(0);
  noratings = Array(5 - this.loggedInUser[0].rating).fill(0);

  openModal() {
    $('#exampleModalCenter').modal('toggle')
  }
  ngOnInit(): void {
  }

}
