import { Component, OnInit } from '@angular/core';
import {  lastValueFrom } from 'rxjs';
import { MyProjectService } from './../../../Services/myProjects/my-project.service';
import { SignInService } from './../../../Services/sign-in/sign-in.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
  constructor(private myProjectService:MyProjectService,private SignInService:SignInService) { }

  serviceProviderData:any

  async getServiceProviderData(){
    this.serviceProviderData=await lastValueFrom( this.myProjectService.getServiceProviderDetails(this.SignInService.getcontactinfo().email))
    this.serviceProviderData[0].profilePicture=environment.baseUrl + "/" + this.serviceProviderData[0].profilePicture

  }
  ngOnInit(): void {
    this.getServiceProviderData()
  }

}
