import { Component, OnInit } from '@angular/core';
import {  lastValueFrom } from 'rxjs';
import { MyProjectService } from '../../../Services/myProjects/my-project.service';
import { SignInService } from '../../../Services/sign-in/sign-in.service';
import { environment } from 'src/environments/environment';
import { SpinnerService } from '../../../Services/spinner/spinner.service';


@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
  constructor(private myProjectService:MyProjectService,private SignInService:SignInService,private SpinnerService:SpinnerService) { }
  date=new Date()
  serviceProviderData:any
  serviceProviderProjects:any
  time:any
  searchText:any
  activeButton:string="deadlines"
  projectDetails:any


  async getServiceProviderData(){
    this.serviceProviderData=await lastValueFrom( this.myProjectService.getServiceProviderDetails(this.SignInService.getcontactinfo().email))
    this.serviceProviderData[0].profilePicture=environment.baseUrl + "/" + this.serviceProviderData[0]?.profilePicture

  }
  async getServiceProviderProjects(){
    this.SpinnerService.requestStarted()
    
    this.serviceProviderProjects=await lastValueFrom(this.myProjectService.getServiceProviderProjects(this.SignInService.getId()))
    this.serviceProviderProjects.forEach(element => {
      element.clientProfile[0].profileImage=environment.baseUrl + "/" + element.clientProfile[0].profileImage
      element.estCompletionTime=new Date(element.estCompletionTime)
      this.time=(element.estCompletionTime.getTime()-this.date.getTime())
      
      if(this.time>0)
      {
        element.timeStatus="positive"
      }
      else if(this.time<0){
        element.timeStatus="negative"
      }
      element.time=Math.round(Math.abs(element.estCompletionTime.getTime()-this.date.getTime())/(1000 * 3600 * 24))
      if(element.time==0){
        element.timeStatus="zero"
      }
    });
    this.serviceProviderProjects.sort((a:any, b:any) => (a?.estCompletionTime > b?.estCompletionTime ? 1 : -1));

    setTimeout(() => {
      this.SpinnerService.requestEnded()
    }, 2000)
  }

  fillterButtonClick(value:any){
    this.activeButton=value

    switch(value){
      case "deadlines":
        this.serviceProviderProjects.sort((a:any, b:any) => (a?.estCompletionTime > b?.estCompletionTime ? 1 : -1));
        break;
      case "compensation":
        this.serviceProviderProjects.sort((a:any, b:any) => (a?.bidDetails[0].amount > b?.bidDetails[0].amount ? -1 : 1));
        break;

    }
  }


  openModal(jobId:any,clientName:any,clientProfile:any,jobAddress:any,earning:any) {

    this.projectDetails={
      jobId:jobId,
      clientName:clientName,
      clientProfile:clientProfile,
      jobAddress:jobAddress,
      earning:earning
    }

    $('#exampleModalCenter').modal('toggle')
  }

  ngOnInit(): void {
    this.getServiceProviderData()
    this.getServiceProviderProjects()
  }

}
