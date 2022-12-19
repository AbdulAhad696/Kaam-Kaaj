import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignInService } from './../../Services/sign-in/sign-in.service';
import { SpinnerService } from './../../Services/spinner/spinner.service';
import { ClientProjectsService } from './../../Services/clientProjects/client-projects.service';
import {  lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.css']
})
export class ClientProjectsComponent implements OnInit {

  clientData:any
  searchText:any
  activeButton:string="deadlines"
  clientProjects:any
  time:any
  date=new Date()
  projectDetails:any







  constructor(private SignInService:SignInService,private SpinnerService:SpinnerService,private ClientProjectsService:ClientProjectsService) { }
  async getClientData(){
    this.clientData=await lastValueFrom( this.ClientProjectsService.getClientDetails(this.SignInService.getcontactinfo().email))
    this.clientData[0].profileImage=environment.baseUrl + "/" + this.clientData[0]?.profileImage
  }
  fillterButtonClick(value:any){
    this.activeButton=value

    switch(value){
      case "deadlines":
        this.clientProjects.sort((a:any, b:any) => (a?.estCompletionTime > b?.estCompletionTime ? 1 : -1));
        break;
      case "compensation":
        this.clientProjects.sort((a:any, b:any) => (a?.bidDetails[0].amount > b?.bidDetails[0].amount ? -1 : 1));
        break;

    }
  }

  async getClientProjects(){
    this.SpinnerService.requestStarted()
    
    this.clientProjects=await lastValueFrom(this.ClientProjectsService.getClientProjects(this.SignInService.getId()))
    this.clientProjects.forEach(element => {
      element.serviceProviderProfile[0].profilePicture=environment.baseUrl + "/" + element.serviceProviderProfile[0]?.profilePicture
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
    this.clientProjects.sort((a:any, b:any) => (a?.estCompletionTime > b?.estCompletionTime ? 1 : -1));

    setTimeout(() => {
      this.SpinnerService.requestEnded()
    }, 3000)
  }

  openModal(jobId:any,clientName:any,clientProfile:any,jobAddress:any,earning:any) {

    this.projectDetails={
      jobId:jobId,
      clientName:clientName,
      clientProfile:clientProfile,
      jobAddress:jobAddress,
      earning:earning,
      reload:this.ngOnInit.bind(this)
    }

    $('#exampleModalCenter').modal('toggle')
  }

  ngOnInit(): void {
    this.getClientData()
    this.getClientProjects()
  }

}
